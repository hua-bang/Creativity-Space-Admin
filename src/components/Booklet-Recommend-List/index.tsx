import React, { useEffect, useState } from 'react';
import { Card, Link } from '@arco-design/web-react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { Booklet } from '@/typings/booklet';
import { getBookletList } from '@/api/booklet';

const BookletRecommendList: React.FC = () => {
  const navigate = useNavigate();
  const [bookletList, setBookletList] = useState<Booklet[]>([]);


  useEffect(() => {
    getBookletList({ page: 1, pageSize: 5 }).then(res => {
      setBookletList(res.data.list);
    });
  }, []);

  return (
    <Card 
      bordered={true}
      bodyStyle={{ padding: '0' }} 
      style={{ borderRadius: '5px 5px 0 0'}} 
      title='小册列表' 
      extra={<Link onClick={() => {navigate('/home/booklet');}}>查看全部</Link>}
    >
      {
        bookletList.map(booklet => (
          <div 
            className={styles['booklet-item']} 
            onClick={() => { navigate(`/booklet/detail/${booklet.id}`); }} key={booklet.id}>
            <div className={styles['booklet-avatar']}>
              <img src={booklet.cover_url} />
            </div>
            <div className={styles['booklet-info']}>
              <div className={styles['booklet-name']}>
                {booklet.name}
              </div>
              <div className={styles['job-title']}>
                {booklet.description}  
              </div>
            </div>
          </div>
        ))
      }
    </Card>
  );
};

export default BookletRecommendList;