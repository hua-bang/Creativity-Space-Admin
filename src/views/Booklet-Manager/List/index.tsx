import { getBookletList } from '@/api/booklet';
import { CLIENT_URL } from '@/config/client';
import { BOOKLET_STATUS_MAP, BOOKLET_STATUS_MAP_KEY } from '@/const/booklet';
import { Booklet, QueryBookletDto } from '@/typings/booklet';
import { Form, PaginationProps, Table, Input, Button, Select } from '@arco-design/web-react';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import React, { useEffect, useState } from 'react';
import { columns as defaultColumn } from './columns';
import styles from './index.module.scss';

const defaultParams = {
  page: 1,
  pageSize: 10,
};

const FormItem = Form.Item;
const Option = Select.Option;

const BookletList: React.FC = () => {

  const [booklets, setBooklets] = useState<Booklet[]>([]);
  const [params, setParams] = useState<QueryBookletDto>({...defaultParams});
  const [total, setTotal] = useState<number>(0);

  const loadData = (params: QueryBookletDto) => {
    getBookletList(params).then((res) => {
      const {list, pagination} = res.data;
      setBooklets(list);
      setTotal(pagination.total);
    });
  }

  const handleChange = (pagination: PaginationProps) => {
    const { current = 1 } = pagination;
    setParams(prev => ({
      ...prev,
      page: current,
    }))
  }

  const handleSubmit = (data: Partial<QueryBookletDto>) => {
    setParams(prev => ({
      ...prev,
      ...data,
      page: 1
    }));
  }

  useEffect(() => {
    loadData(params);
  }, [params]);

  const toBookletDetail = (id: string) => {
    window.open(`${CLIENT_URL}/booklet/detail/${id}`)
  }

  const operateColumns: ColumnProps<Booklet>[] = [
    {
      title: '操作',
      align: 'center',
      width: 240,
      render: (col: unknown, record: Booklet) => {
        return (
          <div className={styles['btn-area']}>
            <Button type='primary' onClick={() => toBookletDetail(record.id)}>详情</Button>
            <Button type='primary' status='danger'>审核不通过</Button>
          </div>
        );
      }
    }
  ];

  const columns = [...defaultColumn, ...operateColumns];

  return (
    <div>
      <h3>小册列表</h3>
      <div style={{ padding: '5px' }}>
        <Form layout='inline' onSubmit={handleSubmit}>
          <FormItem label='小册名称' field='name'>
            <Input style={{ width: 270 }} placeholder='请输入小册名称' />
          </FormItem>
          <FormItem label='描述' field='description'>
            <Input style={{ width: 270 }} placeholder='请输入描述' />
          </FormItem>
          <FormItem label='状态' field='status'>
            <Select>
              { 
                Object.keys(BOOKLET_STATUS_MAP).map(key => (
                  <Option value={Number(key)}>{ BOOKLET_STATUS_MAP[key as BOOKLET_STATUS_MAP_KEY].value }</Option>
                )) 
              }
            </Select>
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>搜索</Button>
          </FormItem>
        </Form>
      </div>
      <Table
        onChange={handleChange}
        rowKey='id' 
        columns={columns} 
        data={booklets}
        pagination={{ total, current: params.page, pageSize: params.pageSize }}
      />
    </div>
  );
};

export default BookletList;