import { useState } from 'react';
import ListItem from '../components/Report/ListItem';
import * as S from './report.style';

const mockList = [
  {
    id: 1,
    question: 'Why do you apply this company?',
  },
];

const Report: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <S.Container>
      <S.Header>Reports</S.Header>
      <S.Body>
        <S.LeftListArea>
          <h2 className="title">List</h2>
          {mockList.map((i) => (
            <ListItem
              key={i.id}
              selected={selectedId === i.id}
              question={i.question}
              onClick={() => setSelectedId(i.id)}
            />
          ))}
        </S.LeftListArea>
        <S.Contents>
          {selectedId === null && (
            <div className="empty">
              Check the report about your answer
              <br />
              by selecting in left list!
            </div>
          )}
        </S.Contents>
      </S.Body>
    </S.Container>
  );
};

export default Report;
