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
import {
  BsChevronExpand,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";
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
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-7 h-6 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="search"
        class="block w-full p-4 ps-10 text-xl text-gray-900 border border-white-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={` Search ${count} records...`}
      />
    </div>
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
  // sorting

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border dark:border-neutral-700">
      {/* <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2"> */}

      <table
        className="w-full table-auto overflow-scroll md:overflow-auto text-left font-inter border-separate border-spacing-y-0"
        {...getTableProps()}
      >
        <thead className="text-center text-4xl  bg-teal-600/[6%] rounded-lg text-white font-bold w-full uppercase bg-teal-600 dark:bg-teal-600 dark:text-gray-800">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  className="py-4 px-4 text-white sm:text-2xl font-bold whitespace-nowrap"
                  {...columns.getHeaderProps(columns.getSortByToggleProps())}
                >
                  {columns.render("Header")}

                  <span>
                    {columns.isSorted
                      ? columns.isSortedDesc
                        ? "    ▲"
                        : "    ▼"
                      : ""}
                  </span>

                  <div>
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div>
                </th>
              ))}

              {/* <th
                className="py-4 h-full inline-flex justify-center items-center border border-gray-600"
                colSpan={visibleColumns.length}
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th> */}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="odd:bg-white odd:dark:bg-white-50 even:bg-stone-100 even:dark:bg-white-500 hover:bg-gray-50 dark:hover:bg-orange-100"
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
    </div>
    // </div>
  );
}

export default FilteredTable;
