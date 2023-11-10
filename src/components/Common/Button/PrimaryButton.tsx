import { Colors } from '../../../styles/colors';
import * as S from './style';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<Props> = (props) => {
  const { label, onClick, ...otherProps } = props;

  return (
    <S.ButtonWrapper background={Colors.Secondary} onClick={onClick} {...otherProps}>
      {label}
    </S.ButtonWrapper>
  );
};

export default PrimaryButton;
