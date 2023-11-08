import { AIReport } from '../../pages/report';
import * as S from './ReportDetail.style';

interface Props {
  review: AIReport;
}

const ReportDetail: React.FC<Props> = ({ review }: Props) => {
  return (
    <S.Container>
      <S.QnAContainer>
        <h2 className="question">Question</h2>
        <p className="desc-q">{review.question}</p>
      </S.QnAContainer>
      <S.QnAContainer>
        <h2 className="answer">Answer</h2>
        <p className="desc-a">{review.answer}</p>
      </S.QnAContainer>
      <S.PointArea>
        <S.TotalPointContainer>
          <h2 className="title">Total</h2>
        </S.TotalPointContainer>
        <S.DetailArea>
          <DetailItem title="Clarity" point={review.clarity} />
          <DetailItem title="Uniqueness" point={review.uniqueness} />
          <DetailItem title="Depth" point={review.depth} />
          <DetailItem title="Follow-up" point={review.follow_up} />
        </S.DetailArea>
      </S.PointArea>
      <S.OtherAnswerContainer>
        <h2 className="title">Top 3 Answers</h2>
        <div className="item-list">
          <S.OtherAnswerItem>
            <p className="point">
              Avg Top <span className="green">1%</span>
            </p>
            <p className="answer">
              To me, working like a rock would also entail being a dependable
              and stable presence within the team...
            </p>
          </S.OtherAnswerItem>
          <S.OtherAnswerItem>
            <p className="point">
              Avg Top <span className="green">1%</span>
            </p>
            <p className="answer">
              To me, working like a rock would also entail being a dependable
              and stable presence within the team...
            </p>
          </S.OtherAnswerItem>
          <S.OtherAnswerItem>
            <p className="point">
              Avg Top <span className="green">1%</span>
            </p>
            <p className="answer">
              To me, working like a rock would also entail being a dependable
              and stable presence within the team...
            </p>
          </S.OtherAnswerItem>
        </div>
        <h2 className="title">Similar Rated Answers</h2>
        <S.OtherAnswerItem>
          <p className="point">
            Avg Top <span className="green">1%</span>
          </p>
          <p className="answer">
            To me, working like a rock would also entail being a dependable and
            stable presence within the team...
          </p>
        </S.OtherAnswerItem>
      </S.OtherAnswerContainer>
    </S.Container>
  );
};

const DetailItem = ({ title, point }: { title: string; point: number }) => {
  return (
    <S.DetailItem>
      <h2 className="title">{title}</h2>
      <div className="horizontal">
        <div className="point">{point}</div>
        <p className="body">
          This answer is generally logical and has a good flow. But if you
          organize your answers a little more, there is room for improvement.
        </p>
      </div>
    </S.DetailItem>
  );
};

export default ReportDetail;
