import styles from './TextInput.module.scss';

const TextInput = (props) => {
    
    return (<input className={styles.input} type="text" placeholder="Search..." onInput={props.onChange}/>);
};

export default TextInput;