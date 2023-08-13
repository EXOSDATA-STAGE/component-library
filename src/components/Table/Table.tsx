import React, { forwardRef } from "react";
import "./Table.css";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";

import {
  DataTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useMemo, useState } from "react";
import { DataTableToolbar } from "./table-components/TableToolbar";

type COLUMNST = {
  accessorKey: string;
  header: string;
};

interface TableProps {
  columns: COLUMNST[];
  data: any;
  pageSize: number;
  filterColumns: string[];
}
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ data, columns, pageSize, filterColumns }, ref) => {
    const [columnFilters, setColumnFilters] = useState([]);
    const cols = useMemo(() => columns, []);

    const table = useReactTable({
      data,
      columns: cols,
      initialState: {
        pagination: {
          pageSize: pageSize,
        },
      },
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      // onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        columnFilters,
      },
    });

    return (
      <div>
        <div>
          <DataTableToolbar table={table} columns={filterColumns} />
        </div>

        <div className="table-container">
          <DataTable className="table" ref={ref}>
            <TableHeader className="table-header">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="table-row ">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="table-head">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="table-body">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} className="table-row-body">
                    {row.getVisibleCells().map((cell) => {
                      let hasMeta =
                        cell.getContext().cell.column.columnDef.meta;
                      return (
                        <TableCell
                          key={cell.id}
                          {...(hasMeta && {
                            ...hasMeta.getCellContext(cell.getContext()),
                          })}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="table-cell">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </DataTable>
        </div>
        {/* <div>
        <Pagination
          previousPage={() => table.previousPage()}
          nextPage={() => table.nextPage()}
          disabledPrevious={!table.getCanPreviousPage()}
          disabledNext={!table.getCanNextPage()}
          pageCount={table.getPageCount()}
          setPageIndex={table.setPageIndex}
        />
      </div> */}
      </div>
    );
  }
);
