import { TableSkeleton } from '@ui/Skeletons/TableSkeleton';

export default function Loading() {
  return (
    <TableSkeleton
      colCount={5}
      rowsCount={10}
    />
  );
}
