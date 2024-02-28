import styles from './MyButton.module.css';

const MyButton = (props) => {
  return (
    <div>
      <button className={styles.myButton}>{props.children}</button>
    </div>
  );
};

export default MyButton;
