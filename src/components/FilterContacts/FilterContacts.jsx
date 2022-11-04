import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/Phonebook.redux/FiltrSlice';
import { getFilter } from 'redux/Phonebook.redux/selector';
export const FilterContacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeName = event => {
    dispatch(changeFilterAction(event.target.value));
  };
  return (
    <>
      <h2>Contacts</h2>
      <label htmlFor="input">Find contacts by name</label>
      <input type="text" name="filter" onChange={onChangeName} value={filter} />
    </>
  );
};
