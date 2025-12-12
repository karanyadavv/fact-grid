import { useMemo, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import data from "../data/employees.json";

export const EmployeeGrid = () => {
  const [rowData, setRowData] = useState(data.employees);
  const cols = Object.keys(data.employees[0]).map((item) => ({
    field: item,
  }));
  const [colDefs, setColDefs] = useState(cols);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: true,
    }),
    []
  );
  return (
    <div className="flex flex-col items-center justify-center pt-10 font-primary">
      <h1 className="text-3xl font-medium tracking-tight text-gray-950">
        Employee Grid
      </h1>
      <div
        className="ag-theme-alpine"
        style={{ height: 550, marginTop: 40, width: "80%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};
