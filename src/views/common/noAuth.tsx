import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NoAuthProps {
  redirectPath?: string;
}

const NoAuth = ({
  redirectPath
}: NoAuthProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log('没有权限');
    
    setTimeout(() => {
      navigate(redirectPath ? redirectPath : '/login');
    }, 1000)
  }, []);

  return (
    <div>401</div>
  );
}
export default NoAuth;