// פונקציה שמחזירה צבע לפי סטטוס (במקום לכתוב את התנאי בתוך ה-return)
function getStatusColor(status) {
  if (status === "done") return "green";
  if (status === "in progress") return "orange";
  return "red";
}

function getStatusText(status) {
  if (status === "done") return "בוצעה";
  if (status === "in progress") return "בתהליך";
  return "לא בוצעה";
}

// destructuring של ה-props
export default function TodoItem({ task, onDone, onDelete }) {
  const { id, title, status } = task;

  return (
    <li style={{ color: getStatusColor(status) }}>
      {title} - {getStatusText(status)}

      {/* אם המשימה כבר בוצעה - לא מציגים את הכפתור */}
      {status !== "done" && (
        <button onClick={() => onDone(id)}>המשימה בוצעה</button>
      )}

      {/* בונוס - כפתור מחיקה */}
      <button onClick={() => onDelete(id)}>מחיקה</button>
    </li>
  );
}
