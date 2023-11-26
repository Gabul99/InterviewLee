import { Colors } from '../../../styles/colors';
import * as S from './style';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: string;
  inactive?: boolean;
  onClick: () => void;
}

const PrimaryButton: React.FC<Props> = (props) => {
  const { label, onClick, inactive = false, ...otherProps } = props;

  return (
    <S.ButtonWrapper
      background={inactive ? '#00000020' : Colors.Secondary}
      onClick={() => {
        if (!inactive) onClick();
      }}
      {...otherProps}
    >
      {label}
    </S.ButtonWrapper>
  );
};

export default PrimaryButton;
