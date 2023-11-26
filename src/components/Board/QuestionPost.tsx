import { useState } from 'react';
import * as S from './QuestionPost.style';
import PrimaryButton from '../Common/Button/PrimaryButton';
import { Colors } from '../../styles/colors';
import { v4 } from 'uuid';
import { Question } from '../../models/Board/Question';
import { useAuthContext } from '../../context/Auth';
import { addQuestion } from '../../repository/Question';
import { toast } from 'react-toastify';
import LinkToast from '../Toast/LinkToast';
import { positionNames } from './QuestionFilters';

interface Props {
  onClose: () => void;
}

const QuestionPost: React.FC<Props> = (props) => {
  const { onClose } = props;

  const { profile } = useAuthContext();

  const [value, setValue] = useState('');
  const [positionState, setPositionStates] = useState<string | null>(null);
  const [tagStates, setTagStates] = useState<string[]>([]);

  const handleTagClick = (tagName: string) => {
    if (tagStates.includes(tagName)) setTagStates(tagStates.filter((tag) => tag !== tagName));
    else setTagStates([...tagStates, tagName]);
  };

  const postNewQuestion = () => {
    if (value === '' || !profile) {
      window.alert('Please fill above input!');
      return;
    }
    const newQuestion: Question = {
      id: v4(),
      authorId: profile.id,
      question: value,
      // max rating : 5
      rating: 0,
      tags: tagStates,
      position: positionState,
    };
    addQuestion(newQuestion).then(() => {
      showToast();
      onClose();
    });
  };

  const showToast = () => {
    toast(<LinkToast text={'Nice question! +10 pts to your university'} />);
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
          <div className="description">
            What position does this question target? <span style={{ color: 'red' }}>*</span>
          </div>
        </S.Description>
        <S.TagList>
          {positionNames.map((name, index) => (
            <S.PositionTag
              key={index}
              className={positionState === name ? 'selected' : ''}
              onClick={() => {
                if (positionState === name) setPositionStates(null);
                else setPositionStates(name);
              }}
            >
              {name}
            </S.PositionTag>
          ))}
        </S.TagList>
        <S.Description>
          <div className="description">Select tags that your question belongs to:</div>
        </S.Description>
        <S.TagList>
          {tagNames.map((tag, index) => (
            <S.Tag
              key={index}
              onClick={() => handleTagClick(tag)}
              // Apply a different style if the tag is clicked
              style={{
                background: tagStates.includes(tag) ? Colors.Secondary : 'white',
                color: tagStates.includes(tag) ? 'white' : Colors.Secondary,
              }}
            >
              #{tag}
            </S.Tag>
          ))}
        </S.TagList>
        <div className="button-wrapper">
          <PrimaryButton
            label="Inspect"
            inactive={positionState === null || value === ''}
            onClick={() => {
              postNewQuestion();
            }}
          />
        </div>
      </S.QuestionInputWrapper>
    </S.Container>
  );
};

export default QuestionPost;

export const tagNames = ['Culture Fit', 'Technology', 'Ambition', 'Experience', 'Leadership'];
