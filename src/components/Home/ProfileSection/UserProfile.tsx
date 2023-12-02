import * as S from './UserProfile.style';
import TestImage from '../../../assets/profile.png';
import { useAuthContext } from '../../../context/Auth';
import { getQuestions } from '../../../repository/Question';
import { useEffect, useState } from 'react';
import { getAnswers } from '../../../repository/Answer';

const UserProfile: React.FC = () => {
  const { profile } = useAuthContext();

  const [questionCount, setQuestionCount] = useState<number>(0);
  const [answerCount, setAnswerCount] = useState<number>(0);

  const fetchData = async () => {
    const questions = await getQuestions();
    const answers = await getAnswers();

    if (questions) {
      const count = questions.filter((question) => question.authorId === profile?.id).length;
      setQuestionCount(count);
    }

    if (answers) {
      const count = answers.filter((answer) => answer.authorId === profile?.id).length;
      setAnswerCount(count);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.ProfileImageContainer>
        <S.ProfileImage src={TestImage} />
      </S.ProfileImageContainer>
      {profile && (
        <S.ProfileContent>
          <h2 className="name">{profile.name}</h2>
          <S.PreferWrapper>
            {profile.prefer.map((name) => (
              <S.PositionFilterItem key={name}>{name}</S.PositionFilterItem>
            ))}
          </S.PreferWrapper>
          <S.ProfileActvities>
            <div className="row">
              <span>No. of Responses:</span>
              <span>{questionCount}</span>
            </div>
            <div className="row">
              <span>No. of Questions:</span>
              <span>{answerCount}</span>
            </div>
          </S.ProfileActvities>
        </S.ProfileContent>
      )}
    </S.Container>
  );
};

export default UserProfile;
