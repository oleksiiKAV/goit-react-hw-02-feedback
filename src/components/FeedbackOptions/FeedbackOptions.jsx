import PT from 'prop-types';
import { BtnStyled, Box, Title } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Title></Title>
      <Box>
        {Object.keys(options).map(el => (
          <BtnStyled key={el} name={el} onClick={onLeaveFeedback}>
            {el}
          </BtnStyled>
        ))}
      </Box>
    </>
  );
};

FeedbackOptions.protoType = {
  options: PT.objectOf(PT.number).isRequired,
  onLeaveFeedback: PT.func.isRequired,
};

export default FeedbackOptions;
