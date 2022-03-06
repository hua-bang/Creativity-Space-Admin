import React, { ReactElement } from "react";

interface AuthorizedProps {
  userInfo: Record<string, any>;
  authority: string | string[];
  children: ReactElement<any, any> | null;
  noMatch: ReactElement<any, any> | null;
}

const Authorized: React.FC<AuthorizedProps> = ({
  userInfo,
  authority,
  noMatch,
  children
}) => {

  const { currentAuthority } = userInfo || '';

  if (!authority) {
    return children;
  }

  const _authority = Array.isArray(authority) ? authority : [authority];

  if (_authority.includes(currentAuthority)) {
    return children;
  }

  return noMatch;
}

export default Authorized;