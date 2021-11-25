create table Users (
	id_user int not null primary key,
	name_user varchar(20) not null,
	mail varchar(10) not null,
	password_user varchar(20) not null
)
create table Families (
	id_family int not null primary key,
	name_family varchar(10) not null
)
create table Members (
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family)
)
create table Goals (
	id_goal int not null primary key,
	name_goal varchar(10) not null,
	amount float not null,
	start_date_goal date not null,
	end_date_goal date not null,
	is_completed bit not null default 0,
	is_terminated bit not null default 0,
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family)
)
create table Categories (
	name_category varchar(10) not null primary key,
	description_category varchar(60),
	type_category int not null check(type_category in (1, -1)) --wp³ata/wyp³ata
)
create table Goals_payment (
	id_goal int not null foreign key references Goals(id_goal),
	amount float not null,
	date_goal_payment date not null,
	id_user int not null foreign key references Users(id_user)
)
create table Payment (
	id_payment int not null primary key,
	amount float not null,
	date_payment date not null,
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family),
	category_name varchar(10) foreign key references Categories(name_category) --mo¿e byæ null, bo mo¿na ot tak zapisaæ stan konta (?)
)