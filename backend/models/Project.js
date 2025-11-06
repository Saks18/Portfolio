import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type:String, required: true},
    image: String,
    techStack: [String],
    github: String,
});

const Project = mongoose.model("Project", projectSchema);
export default Project;