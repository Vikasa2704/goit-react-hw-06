import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();

    return (
        <div className={s.searchBox}>
            <label>
                Find contacts by name
                <input type='search' placeholder='Search...' onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
};

export default SearchBox;