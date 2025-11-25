const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function apiRequest(path, method = "GET", body = null) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : null,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

// ----------------------------
// CREATE TASK
// ----------------------------
export function createTask(task) {
  return apiRequest("/tasks", "POST", task);
}

// ----------------------------
// GET TASKS
// ----------------------------
export function getTasks() {
  return apiRequest("/tasks", "GET");
}

// ----------------------------
// DELETE TASK  <-- Add this!
// ----------------------------
export function deleteTask(taskId) {
  return apiRequest(`/tasks/${taskId}`, "DELETE");
}

// ----------------------------
// UPDATE TASK
// ----------------------------
export function updateTask(taskId, task) {
  return apiRequest(`/tasks/${taskId}`, "PUT", task);
}

// ----------------------------
// UPLOAD FILE
// ----------------------------
export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Upload failed");
  }

  return data;
}
