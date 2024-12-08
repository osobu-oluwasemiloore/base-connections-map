export const graphData = {
  nodes: [
    { id: '1', name: 'Alice', group: 'Developer' },
    { id: '2', name: 'Bob', group: 'Designer' },
    { id: '3', name: 'Charlie', group: 'Creator' },
    { id: '4', name: 'Diana', group: 'Developer' },
  ],
  links: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '4' },
    { source: '3', target: '4' },
  ],
};