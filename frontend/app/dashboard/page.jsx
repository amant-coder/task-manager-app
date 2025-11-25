"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { createTask, getTasks, deleteTask, updateTask, uploadFile } from "@/lib/api";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    getTasks()
      .then((d) => setTasks(Array.isArray(d) ? d : []))
      .catch((e) => console.error(e));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      let attachments = [];
      if (file) {
        const uploadRes = await uploadFile(file);
        attachments.push({ url: uploadRes.url, filename: uploadRes.file.originalname });
      }

      if (editingTask) {
        const payload = { title, description };
        if (attachments.length > 0) payload.attachments = attachments;

        const updated = await updateTask(editingTask._id || editingTask.id, payload);
        setTasks((prev) => prev.map(t => (t._id === updated._id || t.id === updated._id) ? updated : t));
        toast.success("Task updated!");
        setEditingTask(null);
      } else {
        const newTask = await createTask({ title, description, attachments });
        setTasks((prev) => [newTask.task || newTask, ...prev]);
        toast.success("Task created!");
      }
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (err) {
      setError(err.message || "Failed to save");
      toast.error(err.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setTitle("");
    setDescription("");
    setFile(null);
  };

  const handleDelete = (id) => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <span className="font-medium text-slate-900">
          Are you sure you want to delete this task?
        </span>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 text-sm bg-slate-200 hover:bg-slate-300 rounded text-slate-800 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              confirmDelete(id);
            }}
            className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    ), {
      duration: 5000,
      position: "top-center",
      style: {
        background: '#fff',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: '1px solid #e2e8f0',
      },
    });
  };

  const confirmDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id && t.id !== id));
      toast.success("Task deleted");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete task");
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="bg-emerald-600 p-4 shadow-md flex justify-between items-center">
        <strong className="text-xl">Dashboard</strong>
        <Button
          onClick={logout}
          variant="danger"
          className="text-sm py-2 px-4 shadow-md"
        >
          Logout
        </Button>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome, {user?.name || "User"}</h2>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg mb-8 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{editingTask ? "Edit Task" : "Add New Task"}</h3>
            {editingTask && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="text-sm text-slate-400 hover:text-white underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500 transition-colors text-white"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500 transition-colors min-h-[100px] text-white"
          />

          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg border border-slate-600 transition-colors text-sm">
              <span>{file ? file.name : "Attach Image"}</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <Button
            disabled={saving}
            type="submit"
            variant={editingTask ? "primary" : "success"}
          >
            {saving ? "Saving..." : (editingTask ? "Update Task" : "Add Task")}
          </Button>
        </form>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Your Tasks</h3>
          {tasks && tasks.length ? (
            tasks.map((task, idx) => (
              <Card
                key={task._id || task.id || idx}
                className="flex justify-between items-start group"
              >
                <div>
                  <div className="font-semibold text-lg">{task?.title || "Untitled"}</div>
                  {task?.description && <div className="text-slate-400 mt-1">{task.description}</div>}
                  {task?.attachments && task.attachments.length > 0 && (
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {task.attachments.map((att, i) => (
                        <img
                          key={i}
                          src={att.url}
                          alt="attachment"
                          className="h-20 w-20 object-cover rounded-md border border-slate-700"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => handleEdit(task)}
                    variant="primary"
                    className="text-sm py-1 px-3"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(task._id || task.id)}
                    variant="danger"
                    className="text-sm py-1 px-3"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-slate-400 text-center py-8">No tasks yet. Add one above!</p>
          )}
        </div>

        {error && <div className="mt-4 text-red-400 bg-red-950/30 p-3 rounded border border-red-900/50">{error}</div>}
      </div>
    </div>
  );
}
