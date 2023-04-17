INSERT INTO department (id, department_name)
VALUES (1, "Sales Team"),
        (2,"Accounting Department"),
        (3, "Warehousing");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Person", 50,000, 1),
        (2, "Accountant", 55,000, 2),
        (3, "Warehouse Associate", 35,000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (11, "Michael", "Scott", 1, NULL);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Dwight", "Schrute", 1, 11),
        (2, "Stanley", "Hudson", 1, 11),
        (3, "Jim", "Halpert", 1, 11),
        (4, "Andy", "Bernard", 1, 11);
        (5, "Angela", "Martin", 2, NULL),
        (6, "Oscar", "Martinez", 2, NULL),
        (7, "Kevin", "Malone", 2, NULL),
        (8, "Lonny", "Collins", 3, NULL),
        (9, "Darryl", "Philbin", 3, NULL),
        (10, "Hidetoshi", "Hasagawa", 3, NULL);