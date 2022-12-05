import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { addColumn } from "../../redux/store";



const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn( { title, icon }));
    setTitle('');
    setIcon('');
 };
 
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:{" "}
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>Icon:{" "}
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
