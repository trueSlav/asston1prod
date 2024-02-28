import MyButton from '../UI/MyButton/MyButton';
import styles from './LoginRegister.module.css';
const LoginRegister = ({ user }) => {
  if (user) {
    return (
      <div className={styles.wrapper}>
        <MyButton>Избранное</MyButton>
        <MyButton>История</MyButton>
        <MyButton>Выход</MyButton>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <MyButton>Войти</MyButton>
        <MyButton>Регистрация</MyButton>
      </div>
    );
  }
};
export default LoginRegister;
