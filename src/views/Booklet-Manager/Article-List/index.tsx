import { auditBookletArticle } from '@/api/audit';
import { getArticleByBookletId } from '@/api/booklet-article';
import AuditModal from '@/components/Audit-Modal';
import ProTable from '@/components/Pro-Table';
import { AuditTypeEnum } from '@/typings/audit';
import { BookletArticle, BookletArticleStatusEnum } from '@/typings/booklet-article';
import { Button, Message } from '@arco-design/web-react';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import React, { useEffect, useState } from 'react';
import { columns as defaultColumns } from './columns';

interface ArticleListProps {
  bookletId: string;
}

const ArticleList: React.FC<ArticleListProps> = ({
  bookletId
}) => {
  const [articles, setArticles] = useState<BookletArticle[]>([]);
  const [params, setParams] = useState({
    booklet_id: bookletId,
    order_by: 'order'
  });

  const handleDataChange = (data: BookletArticle[]) => {
    setArticles(data);
  }

  const audit = (id: string, status: BookletArticleStatusEnum, index: number) => {
    AuditModal.open({
      id,
      status,
      type: AuditTypeEnum.BOOKLET_ARTICLE,
      requestFn: auditBookletArticle,
      onSuccess() {
        articles[index].status = status;
        setArticles(prev => [...prev]);
        Message.success('操作成功');
      }
    });
  }

  const operateColumns: ColumnProps<BookletArticle>[] = [
    {
      title: '操作',
      width: 350,
      align: 'center',
      render(_:unknown, record, index) {
        return (
          <div>
            <Button style={{ marginRight: '10px' }}>
              查看文章
            </Button>
            <Button 
              disabled={record.status === BookletArticleStatusEnum.DRAFT} type="primary" 
              style={{ marginRight: '10px' }}
              onClick={() => { audit(record.id, BookletArticleStatusEnum.AUDITED, index); }}  
            >
              审核通过
            </Button>
            <Button type="primary" status='danger' disabled={record.status === BookletArticleStatusEnum.DRAFT}
          
              onClick={() => { audit(record.id, BookletArticleStatusEnum.UNAUDITED, index); }}
            >
              审核不通过
            </Button>
          </div>
        );
      }
    },
  ];

  const columns = [...defaultColumns, ...operateColumns];

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      booklet_id: bookletId
    }))
  }, [bookletId]);


  return (
    <div>
      <ProTable
        columns={columns}
        requestFn={getArticleByBookletId}
        defaultParams={params}
        data={articles}
        onDataChange={handleDataChange}
      />
    </div>
  );
}

export default ArticleList;