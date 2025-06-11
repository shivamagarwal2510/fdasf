import React from 'react';
import { Check, X } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm mb-3 transition-all duration-200 ease-in-out hover:shadow-md dark:hover:shadow-lg">
      <span
        className={`flex-1 text-lg font-medium cursor-pointer mb-2 sm:mb-0 ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-white'} break-words`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`p-2 rounded-full ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'} text-white transition-colors duration-200 flex items-center justify-center`}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <Check size={18} className={`${todo.completed ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 flex items-center justify-center"
          aria-label="Delete todo"
        >
          <X size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
