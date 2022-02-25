CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_users_table(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

/*Aspas duplas da erro */  
INSERT INTO application_users_table (username, password) VALUES ('Thiago', crypt('jmsssPk1', 'my_salt'));