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

export const EmployeeGrid = () => {
  const [rowData, setRowData] = useState(data.employees);
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

  return (
    <div className="flex flex-col items-center justify-center pt-10 font-primary">
      <h1 className="text-3xl font-medium tracking-tight text-gray-950">
        Employee Grid
      </h1>
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
