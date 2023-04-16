INSERT INTO department (department_name)
VALUES ("Sales Team"),
        ("Accounting Department"),
        ("Warehousing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Person", 50,000, 1),
        ("Accountant", 55,000, 2),
        ("Warehouse Associate", 35,000, 3)



INSERT INTO employee (first_name, last_name, roles, manager_id)
VALUES ("Dwight", "Schrute", 1, NULL),
        ("Stanley", "Hudson", 1, NULL),
        ("Jim", "Halpert", 1, NULL),
        ("Andy", "Bernard", 1, NULL),
        ("Angela", "Martin", 2, NULL),
        ("Oscar", "Martinez", 2, NULL),
        ("Kevin", "Malone", 2, NULL),
        ("Lonny", "Collins", 3, NULL),
        ("Darryl", "Philbin", 3, NULL)
        ("Hidetoshi", "Hasagawa", 3, NULL)