import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { updateSearchString } from "../../redux/store";

const SearchForm = (props) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(''); // why use state?
    const handleSubmit = (e) => {
      e.preventDefault();
    dispatch(updateSearchString(searchValue));
    //dispatch ({type:"UPDATE_SEARCH_STRING", payload: searchValue})
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;