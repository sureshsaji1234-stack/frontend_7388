create database warehouse;
use warehouse;
create table students(
    id int primary key not null,
    name VARCHAR(20) not null
);
drop table students;


create table warehouse_table(
    id int primary key not null AUTO_INCREMENT,
    warehouse_name VARCHAR(30) unique,
    warehouse_portnumber int not null,
    wh_location VARCHAR(200) not null,
    wh_price BIGINT not null,
    wh_area int not null,
    isactive BOOLEAN DEFAULT 1,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdby VARCHAR(10) DEFAULT "Admin",
    updatedby VARCHAR(10) DEFAULT "Admin",
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);
create table product_table(
    product_id int primary key not null,
    product_name VARCHAR(30) unique,
    product_quantity int,
    product_price BIGINT not null,
    category VARCHAR(30) not null,
    barcode VARCHAR(30) unique,
    add_date DATE not NULL,
    isactive BOOLEAN DEFAULT 1,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdby VARCHAR(10) DEFAULT "Admin",
    updatedby VARCHAR(10) DEFAULT "Admin",
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);
