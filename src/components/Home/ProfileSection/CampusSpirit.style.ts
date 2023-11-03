import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  height: 100%;
  padding: 28px 38px;
  border-radius: 20px;

  background-color: ${Colors.Tertiary};

  p {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: ${Colors.Primary};
  }
`;
