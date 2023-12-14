import React, { forwardRef } from "react";
import "./Table.css";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

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

export interface TableProps {
  columns: ColumnDef<
    {
      [x: string]: {};
    },
    any
  >[];
  data: any;
  pageSize: number;
  filterColumns: string[];
}
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ data, columns, pageSize, filterColumns }, ref) => {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    columns.map((column) => {
      const header = column.header;
      column.header = ({ column }) => {
        return (
          <div className="header">
            {(header as string) ?? ""}
            <ArrowUpDown
              className="arrow-icon"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          </div>
        );
      };
    });
    const cols = useMemo(() => columns, []);

    const table = useReactTable<{
      [x: string]: {};
    }>({
      data,
      columns: cols,
      initialState: {
        pagination: {
          pageSize: pageSize,
        },
      },
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
        columnFilters,
        sorting,
      },
    });

    return (
      <div className="full-container">
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
                      return (
                        <TableCell key={cell.id}>
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
