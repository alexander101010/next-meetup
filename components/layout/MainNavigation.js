import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BirbsList</div>
      <nav>
        <ul>
          <li>
            <Link href='/'> 🦜 Events</Link>
          </li>
          <li>
            <Link href='/new-meetup'>+ 🎉</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
