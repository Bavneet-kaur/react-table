import React, { useMemo, useState } from "react";
import { COLUMNS } from "./Columns";
import topColleges from "./topColleges";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "2rem",
          border: "0",
        }}
      />
    </span>
  );
}
// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
      style={{
        color: "black",
      }}
    />
  );
}
function FilteredTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => topColleges, []);
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  return (
    <>
      <table className="table-fixed" {...getTableProps()}>
        <thead className="text-4xl text-gray-700 uppercase bg-teal-600 dark:bg-teal-600 dark:text-gray-800">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  className="border border-gray-600"
                  {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  style={{
                    borderBottom: "solid 5px red",
                    color: "white",
                  }}
                >
                  {columns.render("Header")}
                  <span>
                    {columns.isSorted ? (columns.isSortedDesc ? "▲" : "▼") : ""}
                  </span>
                  <div>
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div>
                </th>
              ))}
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                {/* <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                /> */}
              </th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="hover:bg-gray-50 dark:hover:bg-orange-100"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "9px",
                        border: "solid 1px gray",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FilteredTable;
