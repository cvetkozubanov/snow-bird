import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';

import SnowBirdButton from '../Button';

function renderStatus(id: number) {
  return (
    <Chip
      label={id % 2 === 0 ? 'Good' : 'Bad'}
      color={id % 2 === 0 ? 'success' : 'default'}
      size='small'
    />
  );
}

function renderButton() {
  return (
    <SnowBirdButton onClick={(e) => e.stopPropagation()} style={{ height: 25 }} variant='contained'>
      Evaluate
    </SnowBirdButton>
  );
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

function fileSelected(e: React.ChangeEvent<HTMLInputElement>, id: number) {
  const row = rows.find((r) => r.id === id);
  const fileName = e.target.files ? e.target.files[0].name : '';
  row && (row.fileName = fileName);
  console.log(rows);
}

function renderUpload(params: GridRenderCellParams<any, any, any>) {
  return (
    <Button
      component='label'
      role={undefined}
      variant='contained'
      tabIndex={-1}
      style={{ height: 25 }}
      startIcon={<CloudUploadIcon />}>
      Upload files
      <VisuallyHiddenInput
        type='file'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => fileSelected(e, params.id as number)}
      />
    </Button>
  );
}

export const columns: GridColDef[] = [
  {
    field: 'upload',
    headerName: 'Upload',
    flex: 0.5,
    renderCell: renderUpload
  },
  {
    field: 'fileName',
    headerName: 'File Name',
    flex: 1.5,
    minWidth: 80
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.id as number)
  },
  {
    field: 'calculate',
    headerName: 'Calculate',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
    renderCell: () => renderButton()
  }
];

export const rows: GridRowsProp = [
  {
    id: 1,
    upload: 'Homepage Overview',
    status: 'Online',
    calculate: 8345,
    fileName: ''
  },
  {
    id: 2,
    upload: 'Product Details - Gadgets',
    status: 'Online',
    calculate: 5653,
    fileName: ''
  },
  {
    id: 3,
    upload: 'Checkout Process - Step 1',
    status: 'Offline',
    calculate: 3455,
    fileName: ''
  },
  {
    id: 4,
    upload: 'User Profile Dashboard',
    status: 'Online',
    calculate: 112543,
    fileName: ''
  },
  {
    id: 5,
    upload: 'Article Listing - Tech News',
    status: 'Offline',
    calculate: 3653,
    fileName: ''
  },
  {
    id: 6,
    upload: 'FAQs - Customer Support',
    status: 'Online',
    calculate: 106543,
    fileName: ''
  },
  {
    id: 7,
    upload: 'Product Comparison - Laptops',
    status: 'Offline',
    calculate: 7853,
    fileName: ''
  },
  {
    id: 8,
    upload: 'Shopping Cart - Electronics',
    status: 'Online',
    calculate: 8563,
    fileName: ''
  },
  {
    id: 9,
    upload: 'Payment Confirmation - Bank Transfer',
    status: 'Offline',
    calculate: 4563,
    fileName: ''
  },
  {
    id: 10,
    upload: 'Product Reviews - Smartphones',
    status: 'Online',
    calculate: 9863,
    fileName: ''
  },
  {
    id: 11,
    upload: 'Subscription Management - Services',
    status: 'Offline',
    calculate: 6563,
    fileName: ''
  },
  {
    id: 12,
    upload: 'Order Tracking - Shipments',
    status: 'Online',
    calculate: 12353,
    fileName: ''
  },
  {
    id: 13,
    upload: 'Customer Feedback - Surveys',
    status: 'Offline',
    calculate: 5863,
    fileName: ''
  },
  {
    id: 14,
    upload: 'Account Settings - Preferences',
    status: 'Online',
    calculate: 7853,
    fileName: ''
  },
  {
    id: 15,
    upload: 'Login Page - Authentication',
    status: 'Offline',
    calculate: 9563,
    fileName: ''
  }
];
