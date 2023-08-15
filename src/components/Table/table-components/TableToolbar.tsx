import Search from "./search/Search";
import React, { useState } from "react";
import { Table } from "@tanstack/react-table";
import { MdSouth } from "react-icons/md";

interface DataTableToolbarProps {
  table: Table<
    {
      [x: string]: {};
    } & {
      [x: string]: {};
    }
  >;
  columns: string[];
}

export function DataTableToolbar({ table, columns }: DataTableToolbarProps) {
  const [columnIndex, setColumnIndex] = useState(0);
  const headers = table
    .getHeaderGroups()
    .map((headerGroup) =>
      headerGroup.headers.map((header) => header.column.columnDef.header)
    )[0];
  const accessors =
    table
      .getHeaderGroups()
      .map((headerGroup) =>
        headerGroup.headers.map((header) => header.column.columnDef.accessorKey)
      )[0] || [];

  const inputValue = table.getColumn(accessors[columnIndex])?.getFilterValue;
  console.log("inputValue", inputValue());
  console.log("accessors", accessors[columnIndex]);

  const [isFiltered, setIsFiltred] = useState(false);
  return (
    <div className="my-4  flex items-center justify-between">
      <div className="flex items-center justify-between gap-4">
        <Search
          setFilterValue={
            table.getColumn(accessors[columnIndex])?.setFilterValue
          }
          inputValue={table.getColumn(accessors[columnIndex])?.getFilterValue}
          setColumnIndex={setColumnIndex}
          filterColumns={headers}
          selectedColumn={columnIndex}
        />
        {/* <div className="flex items-center justify-between gap-2">
          <Filter table={table} setIsFiltred={setIsFiltred} />
            {isFiltered && (
              <button
                type="button"
                onClick={() => {
                  setIsFiltred((prev) => !prev);
                  table.getColumn("status").setFilterValue();
                }}
                className="inline-flex items-center rounded-md border border-transparent bg-darkGreen px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-950 focus:ring-offset-1"
              >
                <XCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Reset
              </button>
            )}
          <p>Filter place</p>
        </div> */}
      </div>
    </div>
  );
}
