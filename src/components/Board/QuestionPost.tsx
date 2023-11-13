import { useState } from 'react';
import * as S from './QuestionPost.style';
import PrimaryButton from '../Common/Button/PrimaryButton';
import { Colors } from '../../styles/colors';

interface Props {
  onClose: () => void;
}

const QuestionPost: React.FC<Props> = (props) => {
  const tagNames = ['Culture Fit', 'Interview', 'Travel', 'Family', 'Ambition', 'Hobby', 'Spirit', 'Leadership'];
  const { onClose } = props;
  const [value, setValue] = useState('');
  const [tagStates, setTagStates] = useState<Array<boolean>>(Array(tagNames.length).fill(false));
  const handleTagClick = (index: number) => {
    const newTagStates = [...tagStates];
    newTagStates[index] = !newTagStates[index];
    setTagStates(newTagStates);
  };

  return (
    <S.Container>
      <S.Description>
        <h3>Write a Question</h3>
        <div className="description">
          InterviewLee’s exclusive inspection process will check whether your question is both distinct from those already posted on the Question Board and
          meets the criteria of language appropriateness and relevance to job interviews. We strive to offer a valuable and user-friendly experience for all
          InterviewLee users. Only if your question successfully passes the inspection, it gets posted on the Question Board anonymously and increases your
          Campus Spirit Score.
        </div>
      </S.Description>
      <S.QuestionInputWrapper>
        <p>Question</p>
        <S.Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write your question here.." />
        <S.Description>
          <div className="description"> Select tags that your question belongs to: </div>
        </S.Description>
        <S.TagListWrapper>
          <S.TagList>
            {tagStates.map((isClicked, index) => (
              <S.Tag
                key={index}
                onClick={() => handleTagClick(index)}
                // Apply a different style if the tag is clicked
                style={{
                  background: isClicked ? Colors.Secondary : 'white',
                  color: isClicked ? 'white' : Colors.Secondary,
                }}
              >
                #{tagNames[index]}
              </S.Tag>
            ))}
          </S.TagList>
        </S.TagListWrapper>
        <div className="button-wrapper">
          <PrimaryButton
            label="Inspect"
            onClick={() => {
              console.log('TODO');
              onClose();
            }}
          />
        </div>
      </S.QuestionInputWrapper>
    </S.Container>
  );
};

export default QuestionPost;
