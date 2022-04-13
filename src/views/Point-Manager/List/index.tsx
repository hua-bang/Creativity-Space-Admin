import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Table, Form, Input } from '@arco-design/web-react';
import { columns } from './columns';
import { Point } from '@/typings/point';
import { getPointList } from '@/api/point';
import ProTable from '@/components/Pro-Table';
import { formColumns } from './form';
import { QueryPointDto } from '@/typings/point';
import { queryPoint } from '@/api/point';

const PointList: React.FC = () => {
    
  return (
    <div className={styles['user-list-page']}>
      <h3>动态列表</h3>
      <ProTable<Point, QueryPointDto>
        columns={columns}
        requestFn={queryPoint}
        formColumns={formColumns}
      />
    </div>
  );
};

export default PointList;