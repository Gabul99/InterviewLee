import { positionNames } from '../Board/QuestionFilters';
import * as S from './InterestSelector.style';

interface Props {
  selectedTags: string[];
  setSelectedTags: (value: string[]) => void;
}

const TagSelector = ({ selectedTags, setSelectedTags }: Props) => {
  const handleToggle = (value: string) => {
    console.log('Hi', value, selectedTags);
    if (selectedTags.includes(value)) setSelectedTags(selectedTags.filter((tag) => tag !== value));
    else setSelectedTags([...selectedTags, value]);
  };

  return (
    <S.Container>
      {positionNames.map((name) => (
        <S.Tag key={name} className={selectedTags.includes(name) ? 'selected' : ''} onClick={() => handleToggle(name)}>
          {name}
        </S.Tag>
      ))}
    </S.Container>
  );
};

export default TagSelector;
