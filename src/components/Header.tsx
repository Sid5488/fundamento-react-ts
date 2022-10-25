import styles from './Header.module.css';

import igniteLogo from '../assets/imgs/ignite-logo.svg';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
};

export { Header };
