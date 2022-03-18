import React from "react";
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';

const UserPage: React.FC = () => {
  const { userStore } = useStore();

  const handleClick = () => {
    userStore.setTest();
  }

  return (
    <div onClick={handleClick}>
      {userStore.isLogin ? '是' : '否'}
    </div>
  );
};

export default observer(UserPage);