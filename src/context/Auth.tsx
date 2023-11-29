import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { User } from '../models/Common/User';

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
  const [_profile, _setProfile] = useState<User | null>(null);

  const profile = _profile ?? JSON.parse(localStorage.getItem('profile') ?? 'null');

  const setProfile = (value: User | null) => {
    localStorage.setItem('profile', JSON.stringify(value));
    _setProfile(value);
  };

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
