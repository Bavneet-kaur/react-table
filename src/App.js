import React, { Component } from "react";
import FilteredTable from "./Components/FilteredTable";
// import TableReact from "./Components/TableReact";

class App extends Component {
  render() {
    return (
      <div className="edu-app">
        <FilteredTable />
        {/* <TableReact /> */}
      </div>
    );
  }
}

export default App;
