import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { useRouter } from '../../router/routing';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  color: ${Colors.Primary};
  flex-shrink: 0;
`;

interface Props {
  text: string;
}

const LinkToast = ({ text }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Text>{text}</Text>
      <Button onClick={() => router.push('/campus')}>GO CHECK</Button>
    </Container>
  );
};

export default LinkToast;
