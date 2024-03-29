import React, { ReactElement, useMemo } from 'react';
import useAuth from '../../hooks/useAuth';
import NoAuth from '../../Views/Common/noAuth';
import { observer } from 'mobx-react-lite';

interface AuthProps {
  auth: string | string[];
  children: ReactElement<any, any>;
  redirectPath?: string;
}

const AuthWrapper: React.FC<AuthProps> = ({
  auth,
  children,
  redirectPath
}) => {
  const [, hasAuth] = useAuth();
  const authorized = useMemo(() => hasAuth(auth), [auth, hasAuth]);

  return authorized ? children : <NoAuth redirectPath={redirectPath} />;
}

export default observer(AuthWrapper);