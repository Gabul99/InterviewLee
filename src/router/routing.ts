import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { stringify } from 'qs';

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RoutePath, search?: unknown) {
        navigate({
          pathname: path,
          search: search ? stringify(search, { indices: false }) : undefined,
        });
      },
      pathname: location.pathname,
    };
  }, [navigate]);
}

export type RoutePath = '/' | '/home' | '/board' | '/report' | '/campus';
