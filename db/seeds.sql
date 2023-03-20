INSERT INTO department (names)
VALUES ("Sales Team"),
        ("Accounting Department"),
        ("Warehousing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Person", 50,000, 1),
        ("Accountant", 55,000, 2),
        ("Warehouse Associate", 35,000, 3)



INSERT INTO employee (first_name, last_name, roles, manager_id)
VALUES ("Dwight", "Schrute", 1),
        ("Stanley", "Hudson", 1),
        ("Jim", "Halpert", 1),
        ("Andy", "Bernard", 1),
        ("Angela", "Martin", 2),
        ("Oscar", "Martinez", 2),
        ("Kevin", "Malone", 2),
        ("Lonny", "Collins", 3),
        ("Darryl", "Philbin", 3)
        ("Hidetoshi", "Hasagawa", 3)