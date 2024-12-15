import React from 'react';

import { AnyMap } from '@/types/common';

interface Props {
  data: AnyMap[];
  columns: string[];
}

const Table: React.FC<Props> = ({ data = [], columns = [] }) => {
  return (
    <div className="custom-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={`row_${i}`}>
              {columns.map((column, j) => (
                <td key={`cell_${i}_${j}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
