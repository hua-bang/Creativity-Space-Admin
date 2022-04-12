import CountItem from '@/components/Count-Item';
import { IconBook, IconEdit, IconMessage, IconUser } from '@arco-design/web-react/icon';
import React, { useEffect, useState } from 'react';
import { getStaticInfo } from '@/api/static';

const CountInfo = () => {
  
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
      <div>
        <CountItem 
          icon={<IconEdit style={{ color: '#ff7d00' }} />}
          count={staticInfo.articleCount}
          bgColor="#ffe4ba"
          title="文章总数"
        />
      </div>
      <div>
        <CountItem 
          icon={<IconBook style={{ color: '#14c9c9' }} />}
          count={staticInfo.bookletCount}
          bgColor="#b7f4ec"
          title="小册总数"
        />
      </div>
      <div>
        <CountItem 
          icon={<IconMessage style={{ color: '#165dff' }} />}
          count={staticInfo.pointCount}
          title="动态总数"
        />
      </div>
      <div>
        <CountItem 
          icon={<IconUser style={{ color: '#722ed1' }} />}
          count={staticInfo.userCount}
          bgColor="#f5e8ff"
          title="用户总数"
        />
      </div>
    </>
  );
}

export default CountInfo;