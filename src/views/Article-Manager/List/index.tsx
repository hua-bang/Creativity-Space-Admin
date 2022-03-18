import React, { useEffect, useState } from 'react';
import { Table } from '@arco-design/web-react';
import { columns } from './columns';
import styles from './index.module.scss';
import { Article } from '@/typings/article';
import { getArticleList } from '@/api/article';

const ArticleList: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  
  const loadData = () => {
    getArticleList().then(res => {
      setArticles(res.data);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles['article-list-page']}>
      <h3>文章列表</h3>
      <Table rowKey='id' columns={columns} data={articles}/>
    </div>
  );
};

export default ArticleList;