create database washingcentre;
use washingcentre;

show databases;

drop database washingcentre;

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    MobileNo VARCHAR(255),
    Address VARCHAR(255),
    Password VARCHAR(255)
);

CREATE TABLE Services (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ServiceName VARCHAR(255) NOT NULL,
	Charges INT NOT NULL,
    Description VARCHAR(255) NOT NULL
);

CREATE TABLE TimeSlots (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ServiceId INT NOT NULL,
    StartTime DATETIME NOT NULL,
    EndTime DATETIME NOT NULL,
    FOREIGN KEY (ServiceId) REFERENCES Services(Id)
);

CREATE TABLE Bookings (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    UserId INT NOT NULL,
    ServiceId INT NOT NULL,
    TimeSlotId INT NOT NULL,
    BookingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(Id),
    FOREIGN KEY (ServiceId) REFERENCES Services(Id),
    FOREIGN KEY (TimeSlotId) REFERENCES TimeSlots(Id)
);










show tables;

select * from users;
select * from services;

insert into users(firstname, lastname, email, mobileno, address, password) values('Jarvis', 'Edwin', 'jarvis.avinash@gmail.com', '7875746743', 'Jamner', 'Pass@123');

drop table Bookings;
drop table services;

INSERT INTO services (serviceName, charges, description, AvailableTimeSlots) VALUES
    ('Exterior Wash', 1200, 'Rinse the tires, wheels, and wheel wells with water.', '["09:00 AM", "11:00 AM", "02:00 PM"]');
    ('Interior Wash', 2000, 'Thoroughly cleaning the inside of your vehicle.'),
    ('Car Detailing', 3000, 'Improving the condition of a vehicles interior and exterior appearance.'),
    ('Undercarriage Wash', 800, 'Washing a vehicles underside to remove anything that could cause rust or corrosion over the long term.'),
    ('Engine Bay Cleaning', 2500, 'A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them functioning as intended.'),
    ('Headlight Restoration', 500, 'Using professional-grade materials, specialists will carefully remove the outer layer of oxidation and grime present on your lenses.'),
    ('Odor Removal', 300, 'Odor compounds easily bond to other molecules, so certain substances will grab the offensive stuff out of the air before it reaches your schnozz.'),
    ('Bike Washing', 200, 'Wash the whole Bike.');
    
    







