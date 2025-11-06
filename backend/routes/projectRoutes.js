import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

//Get all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch(error) {
        res.status(500).json({message: "Error fetching projects", error});
    }
});

//POST new project
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: "Error adding project", error });
  }
});

// 🟠 UPDATE (PUT) project by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // returns the updated document
    );
    if (!updatedProject)
      return res.status(404).json({ message: "Project not found" });

    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: "Error updating project", error });
  }
});

// 🔴 DELETE project by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject)
      return res.status(404).json({ message: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting project", error });
  }
});

export default router;