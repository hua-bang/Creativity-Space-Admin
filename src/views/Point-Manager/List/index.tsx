import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Table } from '@arco-design/web-react';
import { columns } from './columns';
import { Point } from '@/typings/point';
import { getPointList } from '@/api/point';

const PointList: React.FC = () => {
  
  const [points, setPoints] = useState<Point[]>([]);
  
  const loadData = () => {
    getPointList().then(res => {
      setPoints(res.data);
    });
  }

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <div className={styles['user-list-page']}>
      <h3>动态列表</h3>
      <Table rowKey='id' columns={columns} data={points}/>
    </div>
  );
};

export default PointList;