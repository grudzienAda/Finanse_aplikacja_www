create database FinanceDB;

create table users (
	id_user int not null primary key identity,
	username nvarchar(30) not null,
	mail nvarchar(100) not null unique,
	user_password nvarchar(50) not null
)
create table families (
	family_id int not null primary key identity,
	family_name nvarchar(50) not null
)
create table members (
	id_user int not null foreign key references users(id_user),
	family_id int not null foreign key references families(family_id),
	constraint PK_Member primary key (id_user, family_id)
)
create table goals (
	goal_id int not null primary key identity,
	goal_name nvarchar(50) not null,
	amount money not null,
	goal_start_date date not null,
	goal_end_date date not null,
	is_completed bit not null default 0,
	is_terminated bit not null default 0,
	id_user int not null foreign key references users(id_user),
	family_id int not null foreign key references families(family_id)
)
create table categories (
	category_name nvarchar(50) not null primary key,
	category_description varchar(300)
	--type_category int not null check(type_category in (1, -1)) --wp³ata/wyp³ata
)
create table goals_payments (
	goal_id int not null foreign key references goals(goal_id),
	amount money not null,
	goal_payment_date date not null,
	id_user int not null foreign key references users(id_user)
)
create table payments (
	payment_id int not null primary key identity,
	amount money not null,
	payment_date date not null,
	id_user int not null foreign key references users(id_user),
	family_id int not null foreign key references families(family_id),
	category_name nvarchar(50) foreign key references categories(category_name) --mo¿e byæ null, bo mo¿na ot tak zapisaæ stan konta (?)
)


