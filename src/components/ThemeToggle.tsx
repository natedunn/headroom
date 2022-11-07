import { useEffect, useState } from 'preact/hooks';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      class='bg-blue-200 dark:bg-blue-900 dark:text-white px-3 py-2 rounded-full'
      onClick={handleClick}
    >
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
}
