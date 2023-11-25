import * as S from './InterestSelector.style';

interface Props {
  selectedTags: string[];
  setSelectedTags: (value: string[]) => void;
}

const TagSelector = ({ selectedTags, setSelectedTags }: Props) => {
  const tags = ['Frontend Developer', 'Backend Developer', 'Product Manager', 'UI/UX Designer'];

  const handleToggle = (value: string) => {
    console.log('Hi', value, selectedTags);
    if (selectedTags.includes(value)) setSelectedTags(selectedTags.filter((tag) => tag !== value));
    else setSelectedTags([...selectedTags, value]);
  };

  return (
    <S.Container>
      {tags.map((tag) => (
        <S.Tag key={tag} className={selectedTags.includes(tag) ? 'selected' : ''} onClick={() => handleToggle(tag)}>
          {tag}
        </S.Tag>
      ))}
    </S.Container>
  );
};

export default TagSelector;
