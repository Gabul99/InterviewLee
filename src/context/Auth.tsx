import { PropsWithChildren, createContext, useContext, useRef } from 'react';
import { User } from '../models/Common/User';
import { mockProfile } from '../api/mocks/profile.mock';

interface AuthContextProps {
  profile: User;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = createContext<AuthContextProps>(null!);

const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const profile = useRef<User>(mockProfile).current;

  return (
    <AuthContext.Provider
      value={{
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = (): AuthContextProps => useContext(AuthContext);

export { AuthProvider, useAuthContext };
