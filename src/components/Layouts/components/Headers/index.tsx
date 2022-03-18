import { Avatar } from '@arco-design/web-react';
import React from 'react';
import styles from './index.module.scss';
import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react-lite';
import { IconUser } from '@arco-design/web-react/icon';

const Headers = () => {

  const { userStore } = useStore();

  return (
    <div className={styles['header']}>
      <Avatar size={35}>
        {
          userStore.info ? (
            <img src={userStore.info.avatar} />
          ) : (
            <IconUser />
          )
        }
      </Avatar>
    </div>
  );
}

export default observer(Headers);