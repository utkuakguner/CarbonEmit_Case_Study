import { AnyMap } from '@/types/common';
import React from 'react';

interface Props {
    data: AnyMap[];
    columns: string[];
}

const Table: React.FC<Props> = ({ data = [], columns = [] }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={`row_${i}`}>
                        {columns.map((column, j) => (
                            <th key={`cell_${i}_${j}`}>
                                {row[column]}
                            </th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
