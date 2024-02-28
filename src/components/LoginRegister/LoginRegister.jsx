import MyButton from '../UI/MyButton/MyButton';

const LoginRegister = () => {
  let user = false;

  if (user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <MyButton>Избранное</MyButton>
        <MyButton>История</MyButton>
        <MyButton>Выход</MyButton>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <MyButton>Войти</MyButton>
        <MyButton>Регистрация</MyButton>
      </div>
    );
  }
};
export default LoginRegister;
