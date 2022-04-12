import { Skeleton } from '@arco-design/web-react';
import React from 'react';
import styles from './index.module.scss';

const SkeletonPage = () => {
  return (
    <div className={styles['skeleton-page-wrapper']}>
      <Skeleton  text={{ rows: 22 }}/>
    </div>
  );
};

export default SkeletonPage;