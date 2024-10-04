import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

interface HeaderProps {
  field: string;
  headerName: string;
  flex?: number;
  minWidth?: number;
  headerAlign?: string;
  align?: string;
  renderCell?: (params: GridRenderCellParams<any, any, any>) => void;
}

const CustomizedDataGrid = <T, >(
  headers: HeaderProps[],
  rows: T[],
  rowsSelectionCallback: (items: []) => void
) => {
  const columns: GridColDef[] = [];
  headers.forEach((h) => {
    columns.push(h as GridColDef);
  });
  return (
    <DataGrid
      autoHeight
      checkboxSelection
      onRowSelectionModelChange={(newRowSelectionModel) =>
        rowsSelectionCallback(newRowSelectionModel as [])
      }
      rows={rows}
      columns={columns}
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
      initialState={{
        pagination: { paginationModel: { pageSize: 7 } }
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density='compact'
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small'
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' }
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' }
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small'
              }
            }
          }
        }
      }}
    />
  );
};

export default CustomizedDataGrid;
