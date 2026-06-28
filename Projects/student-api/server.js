const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// In-memory data store: Array of student objects
let students = [
    { id: 1, name: "Alice Smith", section: "A", gpa: 3.8, nationality: "Canadian" },
    { id: 2, name: "Bob Jones", section: "B", gpa: 3.4, nationality: "American" },
    { id: 3, name: "Charlie Brown", section: "A", gpa: 3.9, nationality: "British" }
];

// Counter for keeping track of incoming requests
let requestCounter = 0;

// Custom Middleware: Logs request count and HTTP method
app.use((req, res, next) => {
    requestCounter++;
    console.log(`[Request #${requestCounter}] Method: ${req.method} | Path: ${req.url}`);
    next(); // Pass control to the next handler
});

// API Endpoints

// 1. Adding a student (POST)
app.post('/students', (req, res) => {
    const { id, name, section, gpa, nationality } = req.body;

    // Basic validation
    if (!id || !name || !section || gpa === undefined || !nationality) {
        return res.status(400).json({ error: "All student fields (id, name, section, gpa, nationality) are required." });
    }

    // Check if ID already exists
    const exists = students.some(s => s.id === Number(id));
    if (exists) {
        return res.status(400).json({ error: `Student with ID ${id} already exists.` });
    }

    const newStudent = { id: Number(id), name, section, gpa: Number(gpa), nationality };
    students.push(newStudent);
    
    res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// 2 & 3. Retrieving all students OR filtering by ID / Section (GET)
app.get('/students', (req, res) => {
    const { id, section } = req.query;

    // If 'id' query param is provided
    if (id) {
        const student = students.find(s => s.id === Number(id));
        if (!student) return res.status(404).json({ error: "Student not found with that ID" });
        return res.json(student);
    }

    // If 'section' query param is provided
    if (section) {
        const filteredStudents = students.filter(s => s.section.toLowerCase() === section.toLowerCase());
        return res.json(filteredStudents);
    }

    // Default: Retrieve all students
    res.json(students);
});

// Alternative endpoint to fetch a single student by ID directly in URL route parameter
app.get('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
});

// 4. Updating a student (PUT)
app.put('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
        return res.status(404).json({ error: "Student not found" });
    }

    const { name, section, gpa, nationality } = req.body;

    // Update fields if provided in request body
    if (name) students[studentIndex].name = name;
    if (section) students[studentIndex].section = section;
    if (gpa !== undefined) students[studentIndex].gpa = Number(gpa);
    if (nationality) students[studentIndex].nationality = nationality;

    res.json({ message: "Student updated successfully", student: students[studentIndex] });
});

// 5. Deleting a student (DELETE)
app.delete('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const initialLength = students.length;
    
    students = students.filter(s => s.id !== studentId);

    if (students.length === initialLength) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json({ message: `Student with ID ${studentId} deleted successfully.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
