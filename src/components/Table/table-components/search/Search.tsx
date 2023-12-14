import Button from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown";
import Input from "@/components/Input";
import React from "react";
import { BsCheckLg, BsFilterCircle, BsSearch } from "react-icons/bs";
import "./Search.css";

interface SearchProps {
  inputValue: (() => unknown) | undefined;
  setFilterValue: ((updater: any) => void) | undefined;
  setColumnIndex: (value: number) => void;
  filterColumns: Array<string>;
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
            value={(inputValue?.() as string) && ""}
            onChange={(event) => setFilterValue?.(event.target.value)}
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
                key={crypto.randomUUID()}
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
