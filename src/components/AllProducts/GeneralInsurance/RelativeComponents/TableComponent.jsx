import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

const TableComponent = ({ headers, rows, columnWidths }) => {
  return (
    <div className="container px-0 py-8">
      <Card className="overflow-x-auto lg:overflow-x-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th
                  key={index}
                  className={`border-b border-blue-gray-100 bg-theme  p-4 ${columnWidths[index]}`}
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const isLast = index === rows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  {Object.values(row).map((value, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`${classes} ${columnWidths[cellIndex]} break-words`}
                    >
                       <Typography
                        variant="small"
                        className={`font-normal ${cellIndex === 0 ? 'font-semibold' : ''}`}
                      >
                        {value}
                      </Typography>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default TableComponent;
