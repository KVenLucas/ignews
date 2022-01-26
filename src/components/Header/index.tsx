import { SignInButton } from './SignInButton';
import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content']}>
        <img src="images/logo.svg" alt="ig.news" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
