import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/Dropdown";
import Input from "@/components/Input";
import { BsSearch, BsFilterCircle, BsCheckLg } from "react-icons/bs";
import "./Search.css";
import Button from "@/components/Button";
import { ColumnDefTemplate, HeaderContext } from "@tanstack/react-table";
import uuid from "react-uuid";

interface SearchProps {
  inputValue: (() => unknown) | undefined;
  setFilterValue: ((updater: any) => void) | undefined;
  setColumnIndex: (value: number) => void;
  filterColumns:
    | (
        | ColumnDefTemplate<
            HeaderContext<{ [x: string]: {} } & { [x: string]: {} }, unknown>
          >
        | undefined
      )[]
    | undefined;
  selectedColumn: number;
}

const Search: React.FC<SearchProps> = ({
  inputValue,
  setFilterValue,
  filterColumns,
  setColumnIndex,
  selectedColumn,
}) => {
  return (
    <div>
      <div className="container">
        <div className="search-input-container">
          <Input
            type="text"
            name="name"
            id="name"
            leftIcon={
              <BsSearch className="icon" color="#9CA3AF" aria-hidden="true" />
            }
            value={inputValue ? inputValue() : ""}
            onChange={(event) => setFilterValue(event.target.value)}
            className="input"
            placeholder="Search..."
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <BsFilterCircle
                className="icon"
                color="#fff"
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Search By :</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {filterColumns?.map((column, index) => (
              <DropdownMenuItem
                key={uuid()}
                onClick={() => {
                  setColumnIndex(index);
                }}
              >
                {selectedColumn == index && (
                  <BsCheckLg className="selected-icon" />
                )}
                {column}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Search;
