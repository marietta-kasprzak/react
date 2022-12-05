import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchInputValue, updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const currentSearchString = useSelector(searchInputValue);
    const [searchValue, setSearchValue] = useState(currentSearchString);
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
    };

    return (
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchValue} onChange={e => 
                setSearchValue(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;