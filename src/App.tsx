import React from 'react';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-950 flex items-center justify-center p-4 sm:p-6 relative transition-colors duration-300">
      <ThemeToggle />
      <TodoList />
    </div>
  );
}

export default App;
