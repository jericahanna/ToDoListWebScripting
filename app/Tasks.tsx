// Task React page
interface TaskProps {
    task: { id: number; text: string; rank: number };
    onRemove: (id: number) => void;
  }
  
  export default function Task({ task, onRemove }: TaskProps) {
    return (
      <li className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded">
        <span className="font-medium">
          {task.rank}. {task.text}
        </span>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onRemove(task.id)}>Remove</button>
      </li>
    );
  }
  