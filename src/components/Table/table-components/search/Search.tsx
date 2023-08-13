import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/Dropdown";
import { BsSearch, BsFilterCircle } from "react-icons/bs";
import "./Search.css";

interface SearchProps {
  inputValue: (() => string) | undefined;
  setFilterValue: (value: string) => void;
  setColumn: (value: string) => void;
  filterColumns: string[];
}

const Search: React.FC<SearchProps> = ({
  inputValue,
  setFilterValue,
  filterColumns,
  setColumn,
}) => {
  return (
    <div>
      <div className="container">
        <div className="icon-container">
          <BsSearch className="icon" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue ? inputValue() : ""}
          onChange={(event) => setFilterValue(event.target.value)}
          className="input"
          placeholder="Search..."
        />
        <div className="rigth-icon-container ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                <BsFilterCircle className="icon" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterColumns.map((column) => (
                <DropdownMenuItem
                  key={column}
                  onClick={(event) => setColumn(column)}
                >
                  {column}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Search;
