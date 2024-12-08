import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { graphData } from './data';

const Graph = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ForceGraph2D
        graphData={graphData}
        nodeLabel={(node) => `${node.name} (${node.group})`}
        linkDirectionalArrowLength={5}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'black';
          ctx.fillText(label, node.x, node.y + 15);
        }}
      />
    </div>
  );
};

export default Graph;