import React from 'react';
import useStore from '@/hooks/useStore';
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';
import CountInfo from './components/Count-Info';

const DataOverview: React.FC = () => {

  const { userStore } = useStore();

  const { info } = userStore;

  return (
    <div className={styles['overview-page']}>
      <div className={styles['overview-page-title']}>
        Welcome Back, {info?.name ?? info?.username }
      </div>
      <div className={styles['overview-page-count-info']}>
        <CountInfo />
      </div>
    </div>
  );
};

export default observer(DataOverview);