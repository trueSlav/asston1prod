import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import LoginRegister from '../LoginRegister/LoginRegister';

const Header = ({ user }) => {
  return (
    <div className={styles.Header}>
      <Logo></Logo>
      <LoginRegister user={user}></LoginRegister>
    </div>
  );
};
export default Header;
