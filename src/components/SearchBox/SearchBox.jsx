
import { useDispatch, useSelector} from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";


const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  

  return (
    <div>
            <label className={css.label} >
				Find contacts by name
			</label>
      <input
				onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}
				className={css.input}
				type='search'
				inputMode='search'
        name='filter'
				value={filter}
			/>
    </div>
  );
};
export default SearchBox;
