import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import useMount from '@/hooks/useMount';

interface ChartProps {
  title?: string;
  option?: Record<string, any>;
  style?: CSSProperties;
}

const defaultStyles = {
  width: '100%',
  height: '300px'
};

const Chart: React.FC<ChartProps> = ({
  title,
  option,
  style
}) => {

  const [chartInstance, setChartInstance] = useState<echarts.ECharts>();
  const chartDom = useRef<HTMLDivElement>(null);

  const chartStyles = {
    ...defaultStyles,
    ...style,
  }

  const initChartInstance = () => {
    if (!chartDom.current) {
      return ;
    }
    const chart = echarts.init(chartDom.current);
    option && chart.setOption(option);
    setChartInstance(chart);
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }

  const updateOption = (option: echarts.EChartsOption) => {
    const instance = chartInstance;
    instance?.setOption(option);
  };

  useEffect(() => {
    option && updateOption(option);
  }, [option]);

  useMount(() => {
    initChartInstance();
  });

  return (
    <div style={{ width: '100%' }}>
      {
        title && (
          <h5 style={{ width: '100%', textAlign: 'center', margin: '0px' }}>{title}</h5>
        )
      }
      <div style={chartStyles} ref={chartDom}>
      </div>
    </div>
  );
}

export default Chart;