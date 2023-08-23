create database washingcentre;
use washingcentre;

create table users
(
	id int auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255),
    mobileNo varchar(255),
    address varchar(255),
    password varchar(255)
);

CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    serviceName VARCHAR(255) NOT NULL,
	charges INT NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE SelectedServices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT, -- Foreign key referencing Users table
    serviceId INT, -- Foreign key referencing Services table
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (serviceId) REFERENCES Services(id)
);




show tables;

select * from users;
select * from services;

insert into users(firstname, lastname, email, mobileno, address, password) values('Jarvis', 'Edwin', 'jarvis.avinash@gmail.com', '7875746743', 'Jamner', 'Pass@123');


INSERT INTO services (serviceName, charges, description) VALUES
    ('Exterior Wash', 1200, 'Rinse the tires, wheels, and wheel wells with water.'),
    ('Interior Wash', 2000, 'Thoroughly cleaning the inside of your vehicle.'),
    ('Car Detailing', 3000, 'Improving the condition of a vehicles interior and exterior appearance.'),
    ('Undercarriage Wash', 800, 'Washing a vehicles underside to remove anything that could cause rust or corrosion over the long term.'),
    ('Engine Bay Cleaning', 2500, 'A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them functioning as intended.'),
    ('Headlight Restoration', 500, 'Using professional-grade materials, specialists will carefully remove the outer layer of oxidation and grime present on your lenses.'),
    ('Odor Removal', 300, 'Odor compounds easily bond to other molecules, so certain substances will grab the offensive stuff out of the air before it reaches your schnozz.'),
    ('Bike Washing', 200, 'Wash the whole Bike.');






