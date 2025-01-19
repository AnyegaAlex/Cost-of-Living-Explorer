import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Indicator</th>
          <th className="px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{row.indicator}</td>
            <td className="border px-4 py-2">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
