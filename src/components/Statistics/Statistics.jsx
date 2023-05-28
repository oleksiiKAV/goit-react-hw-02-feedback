import PT from 'prop-types';
import { ItemStatStyled } from './Statistics.styled';

const Statistics = props => {
  const arrProps = Object.entries(props);
  return (
    <ul>
      {arrProps.map(el => (
        <ItemStatStyled key={el[0]}>
          {el[0]}: {el[1]}
        </ItemStatStyled>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PT.objectOf(PT.number),
};

export default Statistics;
