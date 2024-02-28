import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import LoginRegister from '../LoginRegister/LoginRegister';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo></Logo>
      <LoginRegister></LoginRegister>
    </div>
  );
};
export default Header;
