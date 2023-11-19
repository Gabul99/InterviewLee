import { createPortal } from 'react-dom';
import * as S from './LoginModal.style';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

const LoginModal = ({ onClose }: Props) => {
  const [nameValue, setNameValue] = useState<string>('');

  return createPortal(
    <S.Wrapper onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <h1 className="title">Welcome to InterviewLee!</h1>
        <p className="sub-title">Only one step to make nice interview...</p>
        <S.Input value={nameValue} placeholder="Type your name" onChange={(e) => setNameValue(e.target.name)} />
        <div style={{ display: 'flex' }}>
          <S.Button
            onClick={() => {
              console.log('hi');
            }}
          >
            Log In
          </S.Button>
        </div>
      </S.Container>
    </S.Wrapper>,
    document.getElementById('root')!,
  );
};

export default LoginModal;
