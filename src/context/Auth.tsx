import { PropsWithChildren, SetStateAction, createContext, useContext, useRef, useState } from 'react';
import { User } from '../models/Common/User';
import { mockProfile } from '../api/mocks/profile.mock';

interface AuthContextProps {
  profile: User | null;
  setProfile: (value: User | null) => void;
  isLoginModalOpen: boolean;
  setLoginModalOpen: (value: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = createContext<AuthContextProps>(null!);

const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [profile, setProfile] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        profile,
        setProfile,
        isLoginModalOpen,
        setLoginModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextProps => useContext(AuthContext);

export { AuthProvider, useAuthContext };
