import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ChartContainer from '../Chart-Container';

interface BarChartProps {
  data: Record<string, number>;
}

const BarChart: React.FC<BarChartProps> = ({
  data
}) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const { articleCount, bookletCount,pointCount, userCount } = data;

  const loadChart = (dom: HTMLDivElement) => {
    const chart = echarts.init(dom);
    const option = {
      grid: {
        top: 20,
        height: '140px',
      },
      xAxis: {
        type: 'category',
        data: ['文章', '小册', '动态', '用户']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [articleCount, bookletCount, pointCount, userCount],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    };
    chart.setOption(option);
    
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
    <ChartContainer title="数量统计图">
      <div ref={containerRef} style={{ width: '90%', height: '200px' }}>
      </div>
    </ChartContainer>
  );
}

export default BarChart;