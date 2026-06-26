const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

const employers = [
  {
    id: 1,
    name: "John Smith",
    department: "Sales",
    salary: 50000,
  },
  {
    id: 2,
    name: "Jane Doe",
    department: "HR",
    salary: 55000,
  },
];



app.get("/employers", (req, res) => {
    res.json(employers);
});

app.post("/employers", (req, res) => {
    const newEmployer = req.body;
    employers.push(newEmployer);

    res.json(newEmployer);
});

app.put("/employers/:id", (req, res) => {
    const { id } = req.params;
    const updatedEmployer = req.body;

    const employerIndex = employers.findIndex((e) => e.id === parseInt(id));

    if (employerIndex === -1) {
        return res.status(404).json({ error: "Employer not found" });
    }
    employers[employerIndex] = updatedEmployer;

    res.json(updatedEmployer);
});

app.delete("/employers/:id", (req, res) => {
    const { id } = req.params;

    const employerIndex = employers.findIndex((e) => e.id === parseInt(id));

    if (employerIndex === -1) {
        return res.status(404).json({ error: "Employer not found" });
    }

    employers.splice(employerIndex, 1);
    res.json({ message: "Employer deleted successfully" });
});
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
