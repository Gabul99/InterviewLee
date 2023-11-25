import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${Colors.White};
  border-radius: 8px;

  h1.title {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }

  p.sub-title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  &:focus {
    border-bottom: 1px solid rgb(0, 0, 0);
  }
`;

export const Button = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${Colors.Secondary};
  color: ${Colors.White};
  font-weight: 600;
  margin-left: auto;
  margin-top: 16px;
  cursor: pointer;
`;
