import { useEntries } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const { entries } = useEntries();
  console.log(entries);
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      <span>{entries.length}</span>
    </header>
  );
}
