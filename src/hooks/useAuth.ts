import { useCallback } from 'react';
import useStore from '@/hooks/useStore';

function getAuthKeys(auth: string | string []) {
  return Array.isArray(auth) ? auth : [auth];
}

function useAuth() {

  const { userStore } = useStore();

  const authConfig = userStore.roles;
  const hasAuth = useCallback(
    (auth: string | string[]) =>
      getAuthKeys(auth).some(key => authConfig.includes(key)),
    [authConfig]
  );

  const ret: [typeof authConfig, typeof hasAuth] = [
    authConfig,
    hasAuth
  ]
  return ret;
}

export default useAuth;