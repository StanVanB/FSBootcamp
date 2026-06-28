const express = require("express");
const sequelize = require("./config/database");
const Student = require("./models/Student");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let requestCounter = 0;

app.use((req, res, next) => {
  requestCounter++;
  console.log(`[Request #${requestCounter}] Method: ${req.method}`);
  next();
});

app.post("/students", async (req, res) => {
  try {
    const { name, section, gpa, nationality } = req.body;

    if (!name || !section || gpa === undefined || !nationality) {
      return res.status(400).json({ error: "name, section, gpa, and nationality are required" });
    }

    const student = await Student.create({
      name,
      section,
      gpa,
      nationality,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to add student" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve students" });
  }
});

app.get("/students/section/:section", async (req, res) => {
  try {
    const students = await Student.findAll({
      where: { section: req.params.section },
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve students by section" });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve student" });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await student.update(req.body);

    res.json({
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update student" });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    await student.destroy();

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete student" });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Tables synchronized.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to database:", error);
  });
