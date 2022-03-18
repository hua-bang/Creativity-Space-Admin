import React from 'react';
import styles from './index.module.scss';
import DataOverview from './components/Data-Overview';

const DashBoard: React.FC = () => {
  return (
    <div className={styles['dashboard']}>
      <DataOverview />
    </div>
  );
};

export default DashBoard;