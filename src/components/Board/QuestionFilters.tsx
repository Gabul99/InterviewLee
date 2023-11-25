import * as S from './QuestionFilters.style';
import { tagNames } from './QuestionPost';

interface Props {
  positionFilters: string[];
  setPositionFilters: (value: string[]) => void;
  tagFilters: string[];
  setTagFilters: (value: string[]) => void;
}

const QuestionFilters = ({ positionFilters, setPositionFilters, tagFilters, setTagFilters }: Props) => {
  const positionNames = ['Data Analyist', 'Back-end', 'Front-end'];

  const handlePositionFilter = (value: string) => {
    if (positionFilters.includes(value)) setPositionFilters(positionFilters.filter((p) => p !== value));
    else setPositionFilters([...positionFilters, value]);
  };

  const handleTagFilter = (value: string) => {
    if (tagFilters.includes(value)) setTagFilters(tagFilters.filter((p) => p !== value));
    else setTagFilters([...tagFilters, value]);
  };

  return (
    <S.Container>
      <S.Row>
        <div className="title">Filter by position</div>
        {positionNames.map((name) => (
          <S.PositionFilterItem key={name} className={positionFilters.includes(name) ? 'selected' : ''} onClick={() => handlePositionFilter(name)}>
            {name}
          </S.PositionFilterItem>
        ))}
      </S.Row>
      <S.Row>
        <div className="title">Filter by Tags</div>
        {tagNames.map((name) => {
          return (
            <S.TagFilterItem key={name} className={tagFilters.includes(name) ? 'selected' : ''} onClick={() => handleTagFilter(name)}>
              #{name}
            </S.TagFilterItem>
          );
        })}
      </S.Row>
      {/* <S.Row>
        <div className="title">Filter Questions by Similar Users</div>
      </S.Row> */}
    </S.Container>
  );
};

export default QuestionFilters;
