import styles from './Logo.module.css';
import imageLogo from '../../assets/react.svg';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <a href="/">
        <img src={imageLogo} alt="imagelogotype" />
      </a>
    </div>
  );
};
export default Logo;
