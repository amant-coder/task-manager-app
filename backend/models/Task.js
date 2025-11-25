// backend/models/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["todo","inprogress","done"], default: "todo" },
  priority: { type: String, enum: ["low","medium","high"], default: "medium" },
  dueDate: { type: Date },
  attachments: [{ url: String, filename: String }],
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
