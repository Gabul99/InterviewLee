import StarIcon from '../Icons/StarIcon';
import * as S from './style';

interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RatingButton: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <S.RatingButtonContainer onClick={onClick}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </S.RatingButtonContainer>
  );
};

export default RatingButton;
