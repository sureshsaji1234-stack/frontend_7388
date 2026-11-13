--  part 1 task 1
create database sql_task_three;
use sql_task_three;
create table students (
	studentid int primary key auto_increment,
    name varchar(30) not null,
    age int check(age>=18),
    email varchar(30) ,
    course varchar(30) ,
    fees int ,
    admission_date timestamp default current_timestamp

);
rename table students to student_details;
alter table student_details add mobile_number int after age;


-- part 1 task 2

create table employees (
	employeeid int primary key auto_increment,
    name varchar(30) not null,
    salary int ,
    department varchar(30) ,
    joining_date timestamp default current_timestamp,
    city varchar(30)
    
);
alter table employees rename column name to employee_name;
alter table employees modify salary decimal(12,2);
alter table employees add email varchar(30) after employee_name;

-- part 1 task 3

-- create table products (
-- 	productid int primary key auto_increment,
--     p_name varchar(30) not null,
--     price int check(price>0),
--     category varchar(30) default "electronics",
--     stock int default 0,
--     manufactoring_date date

-- );
-- rename table products to product_details;

-- alter table product_details drop column manufactoring_date;
-- alter table product_details rename column price to product_price;

-- drop table product_details;

create table products (
	productid int primary key auto_increment,
    p_name varchar(30) not null,
    price int,
    category varchar(30) default "electronics",
    stock int default 0,
    manufactoring_date date

);
rename table products to product_details;

alter table product_details drop column manufactoring_date;
alter table product_details rename column price to product_price;


-- part 1 task 4

create table patients (
	patientid int primary key auto_increment,
    patientname varchar(30) not null,
    age int,
    gender varchar(30) ,
    disease varchar(30) ,
    admission_date timestamp default current_timestamp,
    doctorname varchar(30)

);
alter table patients modify patientname varchar(150);
rename table patients to patient_records;
alter table patient_records rename column disease to diagnosis;

-- part 1 task 5

create table courses (
	courseid int primary key auto_increment,
    coursename varchar(30) not null,
    duration int default 3,
    fees int check(fees>0),
    trainername varchar(30) ,
    start_date timestamp default current_timestamp

);
alter table courses add contact_number int;
alter table courses rename column trainername to instructor_name;


-- part 2 TASK 6
create table customers(
customer_ID int primary key auto_increment,
name varchar(30) not null,
email varchar(30) unique,
city varchar(30) default 'Chennai',
age int,
registration_date date default (current_date)
);

insert into customers (name,email,age) values ("saji","ssk1234@gamil.com",21),
("sajit","ssk123@gamil.com",21),
("sajith","ssk134@gamil.com",21),
("sraji","ssk124@gamil.com",21),
("sajit","ssk234@gamil.com",21),
("sajih","ssk23@gamil.com",21),
("saji","ssk12@gamil.com",21),
("saji","ssk14@gamil.com",21)
;
insert into customers (name,age) values ("Sarjith",21);


-- part 2 TASK 7
create table staff (
staff_ID int primary key auto_increment,
name varchar(30) not null,
department varchar(30),
salary int,
city varchar(30)
);

insert into staff(name,department,salary,city) values ("FS","IT",25000,"Chennai"),
("node","IT",25000,"mumbai"),
("FS","IT",25000,"Chennai"),
("react","HR",25000,"Chennai"),
("html","HR",25000,"Chennai"),
("css","HR",25000,"Chennai"),
("tailwind","IT",25000,"Chennai"),
("BS","IT",25000,"Chennai"),
("js","HR",25000,"Chennai"),
("sql","IT",25000,"Chennai"),
("FS","IT",25000,"Chennai"),
("FS","IT",25000,"Chennai");
update staff set salary = 45000 where staff_ID = 3;
update staff set department = "IT" where staff_ID = 5;
select * from staff where department = "HR";
update staff set salary = salary + 5000 where department = "HR";
update staff set city = "Chennai" where salary > 30000;
