import User from "../models/user.model";
import database from "../database";
import DatabaseError from "../models/errors/database.error.model";

class UserRepository {

    async searchUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username 
            FROM application_users_table`;
        const { rows } = await database.query<User>(query); // ou const rows = result.rows

        return rows || [];
    }

    async searchById(uuid: string): Promise<User>{
        try {
            const query = `
                SELECT uuid, username 
                FROM application_users_table 
                WHERE $1`;
            const values = [uuid];
    
            const { rows } = await database.query<User>(query, values);
            const [ user ] = rows;
    
            return user;
        } catch (error) {
            throw new DatabaseError(`Ocorrou um erro na busca por ID, erro: `, error);
        }
    }

    async createUser(user: User): Promise<string>{
        try {
            const script = `
                INSERT INTO application_users_table (
                    username, 
                    password
                ) 
                VALUES ($1, crypt($2, 'my_salt'))
                RETURNING uuid`;
    
            const values = [user.username, user.password];
    
            const { rows } = await database.query<{ uuid:string}>(script, values);
            const [ newUser ] = rows;
            return newUser.uuid;
        } catch(error) {
            throw new DatabaseError(`Ocorreu um erro na criação de um usúario, erro: `, error);
        }
    }

    async update(user: User): Promise<void>{
        try {
            const script = `
                UPDATE application_users_table 
                SET 
                username = $1, 
                password = cript($2, 'my_salt') 
                WHERE uuid = $3`;
            const values = [user.username, user.password, user.uuid];
            await database.query(script, values);
        } catch(error){
            throw new DatabaseError(`Ocorreu um erro na atualização de um usúario, erro: `, error);

        }
    }

    async removeUser(uuid: string): Promise<void>{
        try {
            const script = `
                DELETE 
                FROM application_users_table 
                WHERE uuid = $1`;
            const values = [uuid];
            await database.query(script, values);
        } catch(error){
            throw new DatabaseError(`Ocorreu um erro na remoção de um usúario, erro: `, error);
        }
    }
}

export default new UserRepository();