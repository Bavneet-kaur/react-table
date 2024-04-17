import React, { Component } from "react";
import FilteredTable from "./Components/FilteredTable";
// import FilterTable from "./Components/FilterTable";

class App extends Component {
  render() {
    return (
      <div className="edu-app">
        <FilteredTable />

        {/* <FilterTable /> */}
      </div>
    );
  }
}

export default App;
