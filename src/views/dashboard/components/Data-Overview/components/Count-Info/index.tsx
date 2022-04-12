import CountItem from '@/components/Count-Item';
import { IconBook, IconEdit, IconMessage, IconUser } from '@arco-design/web-react/icon';
import React, { useEffect, useState } from 'react';
import { getStaticInfo } from '@/api/static';
import styles from './index.module.scss';
import BarChart from '../Bar-Chart';
import ArticlePieChart from '../Pie-Chart/Article-Pie';
import UserPieChart from '../Pie-Chart/User-Pie';
import { useNavigate } from 'react-router-dom';

const CountInfo = () => {
  
  const navigate = useNavigate();

  const [staticInfo, setStaticInfo] = useState({
    articleCount: 0,
    bookletCount: 0,
    userCount: 0,
    pointCount: 0,
  });

  useEffect(() => {
    getStaticInfo().then(res => {
      setStaticInfo(res.data);
    })
  }, []);
  
  return (
    <>
      <div className={styles['count-info-wrapper']}>
        <div onClick={() => navigate('/article-manage/article-list')}>
          <CountItem 
            icon={<IconEdit style={{ color: '#ff7d00' }} />}
            count={staticInfo.articleCount}
            bgColor="#ffe4ba"
            title="文章总数"
          />
        </div>
        <div onClick={() => navigate('/booklet-manage/booklet-list')} >
          <CountItem 
            icon={<IconBook style={{ color: '#14c9c9' }} />}
            count={staticInfo.bookletCount}
            bgColor="#b7f4ec"
            title="小册总数"
          />
        </div>
        <div onClick={() => navigate('/point-manage/point-list')}>
          <CountItem 
            icon={<IconMessage style={{ color: '#165dff' }} />}
            count={staticInfo.pointCount}
            title="动态总数"
          />
        </div>
        <div onClick={() => navigate('/user-manage/user-list')}>
          <CountItem 
            icon={<IconUser style={{ color: '#722ed1' }} />}
            count={staticInfo.userCount}
            bgColor="#f5e8ff"
            title="用户总数"
          />
        </div>
      </div>
      <div className={styles['count-chart-area']}>
        <div>
          <BarChart data={staticInfo} />
        </div>
        <div>
          <ArticlePieChart />
        </div>
        <div>
          <UserPieChart />
        </div>
      </div>
    </>
  );
}

export default CountInfo;