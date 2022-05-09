import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Chart from '@/components/Chart';
import * as echarts from 'echarts';
import { getAll } from '@/api/analysis';
import { userDefaultAnalysisOptions, articleDefaultAnalysisOptions, pointDefaultAnalysisOptions } from './options';
import { Analysis, AnalysisTypeEnum } from '@/typings/analysis';
import dayjs from 'dayjs';

type EchartsOptions = echarts.EChartsOption;

const AnalysisInfo: React.FC = () => {

  const [userAnalysisData, setUserAnalysisData] = useState<Array<Analysis>>([]);
  const [articleAnalysisData, setArticleAnalysisData] = useState<Array<Analysis>>([]);
  const [pointAnalysisData, setPointAnalysisData] = useState<Array<Analysis>>([]);


  const generateArrByType = (data: Array<Analysis>) => {
    const userData: Array<Analysis> = [];
    const articleData: Array<Analysis> = [];
    const pointData: Array<Analysis> = [];
    const map = {
      [AnalysisTypeEnum.USER]: userData,
      [AnalysisTypeEnum.POINT]: pointData,
      [AnalysisTypeEnum.ARTICLE]: articleData,
    }
    data.forEach(item => {
      item.time = dayjs(item.date).format('YYYY-MM-DD');
      map[item.type as AnalysisTypeEnum].push(item);
    });

    return {
      userData,
      pointData,
      articleData
    };
  }

  const getAnalysis = () => {
    getAll().then(res => {
      const sortedData = (res.data as Analysis[]).sort((a, b) => {
        return dayjs(a.date).valueOf() - dayjs(b.date).valueOf(); 
      });
      const { userData, pointData, articleData } = generateArrByType(sortedData);
      setUserAnalysisData(userData);
      setPointAnalysisData(pointData);
      setArticleAnalysisData(articleData);
    }).catch(console.warn);
  };

  const pointOptions = {
    ...pointDefaultAnalysisOptions,
    xAxis: {
      ...pointDefaultAnalysisOptions.xAxis,
      data: pointAnalysisData.map(item => item.time),
    },
    series: [
      {
        data: pointAnalysisData.map(item => item.count),
        type: 'line'
      }
    ]
  };

  const articleOptions = {
    ...articleDefaultAnalysisOptions,
    xAxis: {
      ...articleDefaultAnalysisOptions.xAxis,
      data: articleAnalysisData.map(item => item.time),
    },
    series: [
      {
        data: articleAnalysisData.map(item => item.count),
        type: 'line'
      }
    ]
  };

  const userOptions = {
    ...userDefaultAnalysisOptions,
    xAxis: {
      ...userDefaultAnalysisOptions.xAxis,
      data: userAnalysisData.map(item => item.time),
    },
    series: [
      {
        data: userAnalysisData.map(item => item.count),
        type: 'line'
      }
    ]
  };

  useEffect(() => {
    getAnalysis();
  }, []);

  return (
    <div className={styles['overview-broken-info']}>
      <Chart title='用户数量统计' option={userOptions} />
      <Chart title='文章数量统计' option={articleOptions} />
      <Chart title='动态数量统计' option={pointOptions} />
    </div>
  );
};

export default AnalysisInfo;