import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  // מערך משימות - כל איבר הוא אובייקט עם קוד, כותרת וסטטוס
  const [tasks, setTasks] = useState([
    { id: 1, title: "לסיים את שיעורי הבית בריאקט", status: "done" },
    { id: 2, title: "לחזור על החומר של state ו-props", status: "in progress" },
    { id: 3, title: "להעלות את הפרויקט ל-GitHub", status: "not done" },
  ]);

  // הוספת משימה - הפונקציה עוברת לבן (TodoForm) כ-prop
  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      status: "not done",
    };
    setTasks([...tasks, newTask]);
  }

  // סימון משימה כבוצעה - העתקה שטוחה של האובייקט ששונה
  function markAsDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "done" } : task
      )
    );
  }

  // בונוס - מחיקת משימה
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-list">
      <h1>רשימת המשימות שלי</h1>

      <TodoForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDone={markAsDone}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
