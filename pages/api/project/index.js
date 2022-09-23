import dbConnect from "../../../utils/mongo";
import Project from "../../../models/Project.js";

export default async function handler(req, res) {
  const { method, cookies } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const Project = await Project.create(req.body);
      res.status(201).json(Project);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}