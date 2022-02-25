import {Pool} from "pg";

const connectionString = "postgres://bfgfujrz:f-0vP36nWP9qMEVH8oohT2bznIdZ2r-9@kesavan.db.elephantsql.com/bfgfujrz";

const database = new Pool({ connectionString });

export default database;