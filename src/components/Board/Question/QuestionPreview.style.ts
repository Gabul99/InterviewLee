import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 120px;
  box-sizing: border-box;

  h2 {
    color: #0b409c;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

export const PositionTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  width: fit-content;
  padding: 4px 8px;
  border: 1px solid rgb(0, 0, 0);

  img {
    width: 20px;
    height: 20px;
  }

  .position-name {
    font-size: 12px;
    text-align: center;
    font-weight: 700;
  }
`;

export const QuestionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  min-width: 0;
  flex-basis: 0;

  .content {
    flex-grow: 1;
    min-height: 0;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: #000;

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }

  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 0;
`;

export const TagWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  width: fit-content;

  border-radius: 12px;
  border: 1px solid var(--Indigo, #10316b);
  background: var(--Light-Blue, #f2f7ff);
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.Secondary};
`;
