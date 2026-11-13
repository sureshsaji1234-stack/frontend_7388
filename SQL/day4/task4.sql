create database sql_task_four;
use sql_task_four;
create table department(
dept_id int primary key auto_increment,
dept_name varchar(30) not null,
dept_category varchar(30),
dept_count int,
created_by varchar(30) default "admin",
created_at timestamp default current_timestamp,
updated_by varchar(30),
updated_at timestamp default current_timestamp,
status boolean default True

);


insert into department (dept_name, dept_category, dept_count, updated_by) values("ddl", "sql", 60, "magesh"),
("dml", "sql", 50, "ajay"),
("dql", "sql", 30, "Bala"),
("tcl", "sql", 70, "Akash"),
("dcl", "sql", 20, "magesh"),
("mongoDB", "nosql", 30, "magesh"),
("oracle", "sqlDB", 45, "magesh"),
("react", "d web", 24, "magesh"),
("html", "fe", 78, "magesh"),
("css", "style", 98, "magesh"),
("tailwind", "style", 65, "magesh"),
("bootstrap", "style", 36, "magesh"),
("dbms", "software", 68, "maggie"),
("rdbms", "software", 85, "magesh");

select * from department;

select * from department where dept_name like "_o%";

select * from department order by dept_count asc;

SELECT * FROM department WHERE dept_count > (SELECT AVG(dept_count)FROM department) order by dept_count asc;
