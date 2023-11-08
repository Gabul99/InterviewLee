import * as S from './ListItem.style';

interface Props {
  selected: boolean;
  question: string;
  onClick: () => void;
}

const ListItem: React.FC<Props> = ({ selected, question, onClick }: Props) => {
  return (
    <S.Container className={selected ? 'selected' : ''} onClick={onClick}>
      Q: {question}
    </S.Container>
  );
};

export default ListItem;
