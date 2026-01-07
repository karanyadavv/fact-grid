import { useMemo, useState } from "react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import data from "../data/employees.json";
import { getColumnDefs } from "../config/columnDefs";
import "../App.css";

export const EmployeeGrid = () => {
  const [rowData, setRowData] = useState(data.employees);
  const [highlightTop, setHighlightTop] = useState(false);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: true,
    }),
    []
  );

  const myTheme = themeQuartz.withParams({
    headerBackgroundColor: "#F8F8F8",
  });
  const theme = useMemo(() => {
    return myTheme;
  }, []);
  const columnDefs = useMemo(() => getColumnDefs(), []);

  const rowClassRules = useMemo(
    () => ({
      green: (params) => highlightTop && params.data?.performanceRating >= 4.5,
    }),
    [highlightTop]
  );

  return (
    <div className="flex flex-col items-center justify-center pt-10 font-primary">
      <h1 className="text-3xl font-medium tracking-tight text-gray-950">
        Employee Grid
      </h1>
      <button
        className="bg-gray-500 text-amber-50 p-2 rounded-md cursor-pointer mt-4 text-shadow-gray-900"
        onClick={() => setHighlightTop((prev) => !prev)}
      >
        Higlight top performers
      </button>
      <div
        className="ag-theme-alpine"
        style={{ height: 680, marginTop: 40, width: "80%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          theme={theme}
          rowSelection="multiple"
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
          rowClassRules={rowClassRules}
        />
      </div>
      <div className="mt-8 text-center text-sm text-gray-700">
        <p>
          Click column headers to sort • Use filters for advanced search •
          Double-click cells to edit • Select rows with checkboxes
        </p>
      </div>
    </div>
  );
};

// button clicked we highlight entire row =< 4.5 in green
