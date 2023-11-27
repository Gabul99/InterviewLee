import { createPortal } from 'react-dom';
import * as S from './LoginModal.style';
import { useState } from 'react';
import { addUser, login } from '../../repository/User';
import { useAuthContext } from '../../context/Auth';
import { toast } from 'react-toastify';
import TagSelector from './InterestSelector';
import { v4 } from 'uuid';

interface Props {
  onClose: () => void;
}

const LoginModal = ({ onClose }: Props) => {
  const [isSignUp, setSignUp] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { profile, setProfile } = useAuthContext();

  const handleLogin = () => {
    if (nameValue === '') {
      window.alert('Type name for login!');
      return;
    }
    login(nameValue).then((data) => {
      if (!!data) {
        setProfile(data);
        toast(`Welcome back, ${nameValue}!`);
        onClose();
      } else {
        setSignUp(true);
      }
    });
  };

  const handleSignUp = () => {
    const newUser = {
      id: v4(),
      name: nameValue,
      campus: 'Korea Advanced Institute of Science and Technology',
      question_no: 0,
      response_no: 0,
      prefer: selectedTags,
    };
    addUser(newUser).then(() => {
      setProfile(newUser);
      onClose();
    });
  };

  return createPortal(
    <S.Wrapper onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        {!isSignUp && (
          <>
            <h1 className="title">Welcome to InterviewLee!</h1>
            <p className="sub-title">Only one step to make nice interview...</p>
            <S.Input
              autoFocus
              value={nameValue}
              placeholder="Type your name"
              onChange={(e) => setNameValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
            <div style={{ display: 'flex' }}>
              <S.Button
                onClick={() => {
                  handleLogin();
                }}
              >
                Log In
              </S.Button>
            </div>
          </>
        )}
        {isSignUp && (
          <>
            <h1 className="title">Welcome, {nameValue}</h1>
            <p className="sub-title">We are happy to meet you! Before start interview, let us know your interest</p>
            <TagSelector selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <div style={{ display: 'flex' }}>
              <S.Button
                onClick={() => {
                  handleSignUp();
                }}
              >
                Sign Up!
              </S.Button>
            </div>
          </>
        )}
      </S.Container>
    </S.Wrapper>,
    document.getElementById('root')!,
  );
};

export default LoginModal;
