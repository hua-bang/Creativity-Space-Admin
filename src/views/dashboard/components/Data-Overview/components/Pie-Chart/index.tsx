import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ChartContainer from '../Chart-Container';
import styles from './index.module.scss';

interface PieChartProps {
  title: string;
  data: Array<Record<string, any>>;
}

const PieChart: React.FC<PieChartProps> = ({
  title,
  data
}) => {

  const containerRef = useRef<HTMLDivElement>(null);

  const loadChart = (dom: HTMLDivElement) => {
    const chart = echarts.init(dom, {
      innerWidth: '100%'
    });
    const option = {
      grid: {
        top: '0%',
        bottom: '0%',
        left: '0%',
        right: '0%'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '0%',
        left: 'center'
      },
      series: [
        {
          name: '状态',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data
        }
      ]
    };
    chart.setOption(option);
    setTimeout(() => {
      chart.resize();
    }, 100)
    
    
    window.addEventListener('resize', () => {
      chart.resize();
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      loadChart(containerRef.current);
    }
  }, [data]);

 
  return (
    <ChartContainer title={title}>
      <div className={styles['container-ref']} ref={containerRef} style={{ width: '100%', height: '200px' }}>
      </div>
    </ChartContainer>
  );
}

export default PieChart;