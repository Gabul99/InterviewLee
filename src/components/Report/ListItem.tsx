import { AIReport, getReportAvg } from '../../models/AIReport';
import * as S from './ListItem.style';

interface Props {
  selected: boolean;
  report: AIReport;
  onClick: () => void;
}

const ListItem: React.FC<Props> = ({ selected, report, onClick }: Props) => {
  return (
    <S.Container className={selected ? 'selected' : ''} onClick={onClick}>
      <div>Q: {report.question}</div>
      <div>A: {report.answer.slice(0, 30) + (report.answer.length > 30 ? '...' : '')}</div>
      <S.Score>AI Score Avg: {getReportAvg(report)}</S.Score>
    </S.Container>
  );
};

export default ListItem;
