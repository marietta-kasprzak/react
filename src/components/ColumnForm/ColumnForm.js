import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import TextInput from '../TextInput/TextInput';



const ColumnForm = ({listId}) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn( { title, icon, listId}));
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
