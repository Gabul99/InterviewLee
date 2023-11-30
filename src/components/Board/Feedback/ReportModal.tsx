import styled from 'styled-components';
import { AIReport } from '../../../models/AIReport';
import ReportDetail from '../../Report/ReportDetail';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2000;
`;

const Modal = styled.div`
  width: 720px;
  padding: 20px;
  height: calc(100% - 40px);
  background-color: #dedede;
  border-radius: 16px;
  z-index: 3000;
`;

interface Props {
  report: AIReport;
  onClose: () => void;
}

const ReportModal = ({ report, onClose }: Props) => {
  return (
    <Wrapper onClick={onClose}>
      <Modal>
        <ReportDetail review={report} isOthers={true} />
      </Modal>
    </Wrapper>
  );
};

export default ReportModal;
