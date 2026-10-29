import { useState } from "react";

// הבן מקבל מהאבא פונקציה (onAddTask) וקורא לה כדי לעדכן את הרשימה
export default function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    // לא מוסיפים משימה ריקה
    if (title.trim() === "") return;

    onAddTask(title.trim());

    // ניקוי שדה הקלט אחרי ההוספה
    setTitle("");
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="משימה חדשה..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>אישור</button>
    </div>
  );
}
