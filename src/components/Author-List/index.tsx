import React, { useEffect, useState } from 'react';
import { Card, Link } from '@arco-design/web-react';
import styles from './index.module.scss';
import { User } from '@/typings/user';
import { queryUser } from '@/api/user';
import { useNavigate } from 'react-router-dom';

interface AuthorListProps {
  bordered?: boolean;
}

const AuthorList: React.FC<AuthorListProps> = ({
  bordered = true
}) => {
  const navigate = useNavigate();
  const [authorList, setAuthorList] = useState<User[]>([]);

  useEffect(() => {
    queryUser({ page: 1, pageSize: 5, order_by: 'get_like_count', order: 'DESC' }).then(res => {
      setAuthorList(res.data.list);
    });
  }, []);

  const toAuthorDetail = (authorId: string) => {
    navigate(`/author/${authorId}`);
  };


  return (
    <Card 
      bordered={bordered}
      bodyStyle={{ padding: '0' }} 
      style={{ borderRadius: '5px 5px 0 0'}} 
      title='作者榜' 
      extra={<Link onClick={() => {navigate('/home/author');}}>查看全部</Link>}
    >
      {
        authorList.map(author => (
          <div className={styles['author-item']} key={author.id} onClick={() => {toAuthorDetail(author.id);}}>
            <div className={styles['author-avatar']}>
              <img src={author.avatar} style={{ width: '40px' }} />
            </div>
            <div className={styles['author-info']}>
              <div className={styles['author-name']}>
                {author.name}
              </div>
              <div className={styles['job-title']}>
                {author.job_title}  
              </div>
            </div>
          </div>
        ))
      }
    </Card>
  );
};

export default AuthorList;