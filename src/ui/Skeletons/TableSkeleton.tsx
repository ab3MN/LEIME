'use client';

import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { range } from 'underscore';

interface Props {
  colCount: number;
  rowsCount: number;
}

export const TableSkeleton: FC<Props> = ({ colCount, rowsCount }) => {
  const columns = range(colCount).map((i) => {
    return (
      <th
        key={i}
        className="p-2"
      >
        <Skeleton height={50} />
      </th>
    );
  });

  const rowColumns = range(colCount).map((i) => (
    <td
      key={i}
      className="px-1"
    >
      <Skeleton height={50} />
    </td>
  ));

  const rows = range(rowsCount).map((i) => (
    <tr
      key={i}
      className="px-1"
    >
      {rowColumns}
    </tr>
  ));

  return (
    <table width="100%">
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
