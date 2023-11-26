import ThumbsUp from '../../../assets/thumbs_up.svg';
import ThumbsUpClicked from '../../../assets/thumbs_up_clicked.svg';
import * as S from './style';

interface Props {
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RatingButton: React.FC<Props> = (props) => {
  const { selected, onClick } = props;

  return <S.RatingButtonContainer onClick={onClick}>{selected ? <img src={ThumbsUpClicked} /> : <img src={ThumbsUp} />}</S.RatingButtonContainer>;
};

export default RatingButton;
