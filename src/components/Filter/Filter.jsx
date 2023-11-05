import PropTypes from 'prop-types';
import { Wrapper, EntryField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeName } from 'components/Redux/filterSlice';

export const Filter = () => {
  const el = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <EntryField>Find contacts by name</EntryField>
      <input
        type="text"
        value={el.name}
        onChange={evt => dispatch(onChangeName(evt.target.value))}
        placeholder="Enter name plz"
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  state: PropTypes.object,
  onChangeName: PropTypes.func,
};
