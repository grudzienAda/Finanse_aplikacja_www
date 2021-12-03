create table Users (
	id_user int not null primary key identity,
	name_user nvarchar(30) not null,
	mail nvarchar(30) not null,
	password_user nvarchar(20) not null
)
create table Families (
	id_family int not null primary key identity,
	name_family nvarchar(30) not null
)
create table Members (
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family)
)
create table Goals (
	id_goal int not null primary key identity,
	name_goal nvarchar(50) not null,
	amount float not null,
	start_date_goal date not null,
	end_date_goal date not null,
	is_completed bit not null default 0,
	is_terminated bit not null default 0,
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family)
)
create table Categories (
	name_category nvarchar(30) not null primary key,
	description_category varchar(100),
	type_category int not null check(type_category in (1, -1)) --wp³ata/wyp³ata
)
create table Goals_payment (
	id_goal int not null foreign key references Goals(id_goal),
	amount float not null,
	date_goal_payment date not null,
	id_user int not null foreign key references Users(id_user)
)
create table Payment (
	id_payment int not null primary key identity,
	amount float not null,
	date_payment date not null,
	id_user int not null foreign key references Users(id_user),
	id_family int not null foreign key references Families(id_family),
	category_name nvarchar(30) foreign key references Categories(name_category) --mo¿e byæ null, bo mo¿na ot tak zapisaæ stan konta (?)
)