DROP DATABASE IF EXISTS haiku_db;
CREATE DATABASE haiku_db;
USE haiku_db;

DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    user_id INTEGER not null auto_increment,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
     haiku_post VARCHAR(500) NOT NULL,
    haiku_1 VARCHAR(500) NOT NULL,
    haiku_2 VARCHAR(500) NOT NULL,
    haiku_3 VARCHAR(500) NOT NULL,
    haiku_4 VARCHAR(500) NOT NULL,
    PRIMARY KEY (user_id)
);
INSERT INTO profiles 
(name, password, haiku_post, haiku_1, haiku_2, haiku_3, haiku_4)
VALUES
('Richard', 4444, 'stuff', 'things', 'random', 'trash', 'yall'),
('john', 5555, 'stuff', 'things', 'random', 'trash', 'yall');



select * from profiles
