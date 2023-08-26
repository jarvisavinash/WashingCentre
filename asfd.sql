show databases;
use washingcentre;

show tables;

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
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (1, '2023-08-25 09:00:00', '2023-08-25 10:00:00');

-- Assuming ServiceId 2 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (2, '2023-08-25 14:00:00', '2023-08-25 15:00:00');

-- Assuming ServiceId 3 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (3, '2023-08-26 11:30:00', '2023-08-26 12:30:00');

-- Assuming ServiceId 4 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (4, '2023-08-27 16:30:00', '2023-08-27 17:30:00');

-- Assuming ServiceId 5 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (5, '2023-08-28 08:00:00', '2023-08-28 09:00:00');

-- Assuming ServiceId 6 exists (replace with an existing ServiceId)
INSERT INTO TimeSlots (ServiceId, StartTime, EndTime)
VALUES (6, '2023-08-29 13:00:00', '2023-08-29 14:00:00');



select * from services;
select * from timeslots;