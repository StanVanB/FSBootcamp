-- ==========================================
-- Department / Employee Database Assignment
-- ==========================================

-- Step 1: Create Departments table
CREATE TABLE Departments (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Department_Name VARCHAR(100)
);

-- Step 2: Create Employees table
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(ID)
);

-- Step 3: Insert Departments
INSERT INTO Departments (Name, Department_Name)
VALUES
('HR', 'Human Resources'),
('IT', 'Information Technology'),
('FIN', 'Finance');

-- Step 3: Insert Employees
INSERT INTO Employees (Name, DepartmentID)
VALUES
('Alice', 1),
('Bob', 2),
('Charlie', 3);

-- Step 4: Add Salary column
ALTER TABLE Employees
ADD Salary DECIMAL(10,2) NOT NULL;

-- Step 5: Delete Employees
DELETE FROM Employees
WHERE ID > 0;

-- Step 5: Delete Departments
DELETE FROM Departments
WHERE ID > 0;

-- Step 6: Verify tables are empty
SELECT * FROM Employees;
SELECT * FROM Departments;