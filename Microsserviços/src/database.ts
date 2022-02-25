import {Pool} from "pg";

const connectionString = "";

const database = new Pool({ connectionString });

export default database;