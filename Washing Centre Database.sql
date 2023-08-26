create database washingcentre;
use washingcentre;
show databases;


-- Fake Service 1
INSERT INTO services (serviceName, charges, description)
VALUES ('Fake Service', 100, 'This is a fake service description.');

-- Fake Service 2
INSERT INTO services (serviceName, charges, description)
VALUES ('Fake Service 2', 150, 'This is another fake service description.');

-- Fake Service 3
INSERT INTO services (serviceName, charges, description)
VALUES ('Fake Service 3', 75, 'Yet another fake service description.');

-- Fake Service 4
INSERT INTO services (serviceName, charges, description)
VALUES ('Fake Service 4', 200, 'A different fake service description.');

-- Fake Service 5
INSERT INTO services (serviceName, charges, description)
VALUES ('Fake Service 5', 120, 'A unique fake service description.');



-- Assuming ServiceId 1 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (1, '2023-08-25 09:00:00', '2023-08-25 10:00:00', True);

-- Assuming ServiceId 2 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (2, '2023-08-25 14:00:00', '2023-08-25 15:00:00', False);

-- Assuming ServiceId 3 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (3, '2023-08-26 11:30:00', '2023-08-26 12:30:00', True);

-- Assuming ServiceId 4 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (4, '2023-08-27 16:30:00', '2023-08-27 17:30:00', False);

-- Assuming ServiceId 5 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (5, '2023-08-28 08:00:00', '2023-08-28 09:00:00', True);







show tables;
select * from services;
select * from bookings;
select * from timeslots;










show tables;

select * from users;
select * from services;



INSERT INTO services (serviceName, charges, description, AvailableTimeSlots) VALUES
    ('Exterior Wash', 1200, 'Rinse the tires, wheels, and wheel wells with water.', '["09:00 AM", "11:00 AM", "02:00 PM"]');
    ('Interior Wash', 2000, 'Thoroughly cleaning the inside of your vehicle.'),
    ('Car Detailing', 3000, 'Improving the condition of a vehicles interior and exterior appearance.'),
    ('Undercarriage Wash', 800, 'Washing a vehicles underside to remove anything that could cause rust or corrosion over the long term.'),
    ('Engine Bay Cleaning', 2500, 'A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them functioning as intended.'),
    ('Headlight Restoration', 500, 'Using professional-grade materials, specialists will carefully remove the outer layer of oxidation and grime present on your lenses.'),
    ('Odor Removal', 300, 'Odor compounds easily bond to other molecules, so certain substances will grab the offensive stuff out of the air before it reaches your schnozz.'),
    ('Bike Washing', 200, 'Wash the whole Bike.');
    
    







