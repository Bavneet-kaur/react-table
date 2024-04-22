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
    <div>
      {/* <h1 className="w-full text-2xl text-start font-semibold text-gray-900 bg-white dark:text-white dark:bg-teal-800"> */}
      {/* Top Colleges/Universities of 2024 */}
      {/* </h1> */}

      <div class="pb-4 bg-white dark:bg-gray-900 flex justify-end mb-3">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
            type="text"
            id="table-search"
            className="block  pt-2 ps-10 text-2xl text-gray-900  dark:bg-white-700 border border-gray-300 rounded-lg w-80 bg-gray-50 dark:placeholder-gray-400 dark:text-stone-500"
            placeholder={`Search College...`}
            required
          />
        </div>
      </div>
    </div>
  );
}
// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      type="search"
      id="search"
      class="block w-full p-4 ps-10 text-xl text-gray-900 border border-white-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={` Search ${count} records...`} //header serach filter
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
  // sorting
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (accessor) => {
    if (sortBy === accessor) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(accessor);
      setSortOrder("asc");
    }
  };

  const sortedData = [columns].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
  return (
    <div className="relative border dark:border-neutral-700">
      {/* <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2"> */}

      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table
        className="w-full table-auto  overflow:hidden text-left rtl:text-right font-inter border-separate border-spacing-y-0"
        {...getTableProps()}
      >
        <thead className="text-center text-3xl  bg-teal-600/[6%] rounded-lg text-white font-bold w-full uppercase bg-teal-600 dark:bg-teal-600 dark:text-gray-800">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  scope="col"
                  className="py-4 px-4 text-white sm:text-2xl font-bold whitespace-nowrap"
                  {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  onClick={() => handleSort(columns)}
                >
                  <div class="flex items-center">
                    {columns.render("Header")}

                    <a href="#">
                      <svg
                        class="w-8 h-8 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                    {/* <span>
                      {columns.isSorted
                        ? columns.isSortedDesc
                          ? "    ▲"
                          : "    ▼"
                        : ""}
                    </span> */}
                  </div>

                  {/* <div>
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div> */}
                </th>
              ))}
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
