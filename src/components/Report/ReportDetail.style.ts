import { styled } from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QnAContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.White};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  h2.question {
    font-size: 20px;
    font-weight: 700;
    color: ${Colors.Primary};
  }

  h2.answer {
    font-size: 20px;
    font-weight: 700;
    color: ${Colors.Highlight};
  }

  p.desc-q {
    font-size: 16px;
    font-weight: 500;
  }

  p.desc-a {
    font-size: 16px;
  }
`;

export const PointArea = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TotalPointContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
  flex-basis: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${Colors.White};
  padding: 16px;

  h2.title {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const DetailArea = styled.div`
  flex-grow: 1;
  min-width: 0;
  flex-basis: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: ${Colors.White};
  border-radius: 16px;

  h2.title {
    font-weight: 700;
    font-size: 24px;
  }

  .horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    .point {
      font-size: 24px;
      font-weight: 700;
      color: ${Colors.Secondary};
    }

    .body {
      font-size: 14px;
    }
  }
`;

export const OtherAnswerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: ${Colors.White};
  border-radius: 16px;

  h2.title {
    font-weight: 700;
    font-size: 24px;
  }

  .item-list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const OtherAnswerItem = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  gap: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  p.point {
    font-size: 16px;
    font-weight: 500;
    flex-shrink: 0;

    span.green {
      font-size: 16px;
      font-weight: 500;
      color: ${Colors.Green};
    }
  }

  p.answer {
    flex-grow: 1;
    min-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
