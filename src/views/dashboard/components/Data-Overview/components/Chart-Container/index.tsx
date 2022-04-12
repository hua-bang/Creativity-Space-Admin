import React from 'react';

interface ChartContainerProps {
  title: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children
}) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <h5 style={{ width: '100%', textAlign: 'center' }}>{title}</h5>
      { children }
    </div>
  );
}

export default ChartContainer;