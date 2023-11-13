import styled from 'styled-components';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { AIReport } from '../../models/AIReport';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  report: AIReport;
}

const RadarChart = ({ report }: Props) => {
  return (
    <Container>
      <Radar
        data={{
          labels: ['Clarity', 'Uniqueness', 'Depth', 'Follow-up'],
          datasets: [
            {
              data: [report.clarity, report.uniqueness, report.depth, report.follow_up],
              borderColor: '#0B409C',
              backgroundColor: '#0B409C26',
            },
          ],
        }}
        options={{
          scales: {
            r: {
              min: 0,
              max: 100,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Container>
  );
};

export default RadarChart;
