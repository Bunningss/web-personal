import dbConnect from "../../../utils/mongo";
import Project from "../../../models/Project.js";

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const project = await Project.findById(id);
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}