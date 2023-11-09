import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface QuestionContextProps {
  selectedQuestionId: Nullable<string>;
  setSelectedQuestionId: Dispatch<SetStateAction<Nullable<string>>>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const QuestionContext = createContext<QuestionContextProps>(null!);

const QuestionProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [selectedQuestionId, setSelectedQuestionId] =
    useState<Nullable<string>>(null);

  return (
    <QuestionContext.Provider
      value={{
        selectedQuestionId,
        setSelectedQuestionId,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestionContext = (): QuestionContextProps =>
  useContext(QuestionContext);

export { QuestionProvider, useQuestionContext };
