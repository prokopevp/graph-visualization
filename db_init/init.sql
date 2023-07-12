CREATE TABLE animals (
    id INT NOT NULL PRIMARY KEY,
    label VARCHAR(30) NOT NULL,
    lat VARCHAR(60) NOT NULL,
    kingdom VARCHAR(60) NOT NULL,
    description TEXT NOT NULL
);

COPY animals
FROM '/docker-entrypoint-initdb.d/dataset/animals.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE relations (
    id INT NOT NULL PRIMARY KEY,
    source INT NOT NULL,
    target INT NOT NULL
);

COPY relations
FROM '/docker-entrypoint-initdb.d/dataset/relations.csv'
DELIMITER ','
CSV HEADER;