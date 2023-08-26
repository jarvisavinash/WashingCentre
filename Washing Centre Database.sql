create database washingcentre;
use washingcentre;
show databases;
show tables;
select * from users;
select * from services;
select * from bookings;
select * from timeslots;

INSERT INTO services (serviceName, charges, description) VALUES
    ('Exterior Wash', 1200, 'Rinse the tires, wheels, and wheel wells with water.'),
    ('Interior Wash', 2000, 'Thoroughly cleaning the inside of your vehicle.'),
    ('Car Detailing', 3000, 'Improving the condition of a vehicle''s interior and exterior appearance.'),
    ('Undercarriage Wash', 800, 'Washing a vehicle''s underside to remove anything that could cause rust or corrosion over the long term.'),
    ('Engine Bay Cleaning', 2500, 'A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them functioning as intended.'),
    ('Headlight Restoration', 500, 'Using professional-grade materials, specialists will carefully remove the outer layer of oxidation and grime present on your lenses.'),
    ('Odor Removal', 300, 'Odor compounds easily bond to other molecules, so certain substances will grab the offensive stuff out of the air before it reaches your schnozz.'),
    ('Bike Washing', 200, 'Wash the whole Bike.');




-- Assuming ServiceId 1 exists
-- Inserting time slots for September 1, 2023, from 9:00 AM to 5:00 PM
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES (1, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
       (1, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
       (1, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
       (1, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
       (1, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
       (1, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
       (1, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
       (1, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);
       

-- ServiceId 2
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (2, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (2, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (2, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (2, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (2, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (2, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (2, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (2, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);

-- ServiceId 3
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (3, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (3, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (3, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (3, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (3, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (3, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (3, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (3, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);
       
-- Continue inserting time slots for each ServiceId from 4 to 8
-- ServiceId 4
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (4, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (4, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (4, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (4, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (4, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (4, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (4, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (4, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);

-- Continue this pattern for ServiceId 5 through 8
-- ...

-- ServiceId 5
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (5, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (5, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (5, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (5, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (5, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (5, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (5, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (5, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);

-- Continue this pattern for ServiceId 6, 7, and 8
-- ...
       
       
-- Continue inserting time slots for each ServiceId from 6 to 8
-- ServiceId 6
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (6, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (6, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (6, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (6, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (6, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (6, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (6, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (6, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);

-- ServiceId 7
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (7, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (7, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (7, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (7, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (7, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (7, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (7, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (7, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);

-- ServiceId 8
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime, Availability)
VALUES 
    (8, '2023-09-01 09:00:00', '2023-09-01 10:00:00', True),
    (8, '2023-09-01 10:00:00', '2023-09-01 11:00:00', True),
    (8, '2023-09-01 11:00:00', '2023-09-01 12:00:00', True),
    (8, '2023-09-01 12:00:00', '2023-09-01 13:00:00', True),
    (8, '2023-09-01 13:00:00', '2023-09-01 14:00:00', True),
    (8, '2023-09-01 14:00:00', '2023-09-01 15:00:00', True),
    (8, '2023-09-01 15:00:00', '2023-09-01 16:00:00', True),
    (8, '2023-09-01 16:00:00', '2023-09-01 17:00:00', True);







    
    







