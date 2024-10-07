import { FC, useState } from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { DashboardLayout } from '@/components';
import SnowBirdButton from '@/components/Button';
import Copyright from '@/components/Copyright';
import CustomizedDataGrid from '@/components/DataGrid/CustomizedDataGrid';

interface DashboardComponentProps {
  header: string;
}

export const DashboardComponent: FC<DashboardComponentProps> = ({ header }) => {
  const [data, setData] = useState(rows);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  function renderStatus() {
    const rand = Math.floor(Math.random() * 2);
    return (
      <Chip
        label={rand === 0 ? 'Good' : 'Bad'}
        color={rand === 0 ? 'success' : 'default'}
        size='small'
      />
    );
  }

  function renderButton() {
    return (
      <SnowBirdButton
        onClick={(e) => e.stopPropagation()}
        style={{ height: 25 }}
        variant='contained'>
        Calculate
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
    const rowsCopy = [...data];
    const row = rowsCopy.find((r) => r.id === id);
    const fileName = e.target.files ? e.target.files[0].name : '';
    row && (row.fileName = fileName);
    setData(rowsCopy);
  }

  function renderUpload({ id }: any) {
    return (
      <Button
        component='label'
        role={undefined}
        variant='contained'
        tabIndex={-1}
        style={{ height: 25 }}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        startIcon={<CloudUploadIcon />}>
        Upload files
        <VisuallyHiddenInput
          type='file'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => fileSelected(e, id)}
        />
      </Button>
    );
  }

  const columns = [
    {
      field: 'upload',
      headerName: 'Upload',
      flex: 0.5,
      renderCell: renderUpload
    },
    {
      field: 'fileName',
      headerName: 'File Name',
      flex: 0.5,
      minWidth: 80
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      minWidth: 80,
      renderCell: renderStatus
    },
    {
      field: 'calculate',
      headerName: 'Calculate',
      headerAlign: 'right',
      align: 'right',
      flex: 0.5,
      minWidth: 80,
      renderCell: renderButton
    }
  ];

  function addColumn() {
    const rowsCopy = [...data];
    const maxNo = rowsCopy.reduce((acc, value) => {
      return acc > value.id ? acc : value.id;
    }, 0);
    rowsCopy.unshift({
      id: maxNo + 1,
      status: 'Online',
      calculate: 0,
      fileName: ''
    });
    setData(rowsCopy);
  }

  function rowsSelectionCallback(items: []) {
    setSelectedItems(items);
  }

  function removeColumns() {
    const rowsCopy = [...data].filter((row) => !selectedItems.includes(row.id));
    setData(rowsCopy);
  }

  return (
    <DashboardLayout>
      <Box sx={{ display: 'flex' }}>
        <Box
          component='main'
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto'
          })}>
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 }
            }}>
            <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
              <Typography component='h2' variant='h6' sx={{ mb: 2 }}>
                {header}
              </Typography>
              <Grid container spacing={2}>
                <SnowBirdButton onClick={addColumn} style={{ height: 25 }} variant='contained'>
                  Add
                </SnowBirdButton>
                <SnowBirdButton onClick={removeColumns} style={{ height: 25 }} variant='contained'>
                  Remove Selected
                </SnowBirdButton>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid sx={{ minWidth: 1000, width: '100%' }}>
                  <CustomizedDataGrid
                    headers={columns}
                    rows={data}
                    rowsSelectionCallback={rowsSelectionCallback}
                  />
                </Grid>
              </Grid>
              <Copyright sx={{ my: 4 }} />
            </Box>
          </Stack>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

interface RowProps {
  id: number;
  status: string;
  calculate: number;
  fileName: string;
}

const rows: RowProps[] = [
  {
    id: 1,
    status: 'Online',
    calculate: 8345,
    fileName: ''
  },
  {
    id: 2,
    status: 'Online',
    calculate: 5653,
    fileName: ''
  },
  {
    id: 3,
    status: 'Offline',
    calculate: 3455,
    fileName: ''
  },
  {
    id: 4,
    status: 'Online',
    calculate: 112543,
    fileName: ''
  },
  {
    id: 5,
    status: 'Offline',
    calculate: 3653,
    fileName: ''
  },
  {
    id: 6,
    status: 'Online',
    calculate: 106543,
    fileName: ''
  },
  {
    id: 7,
    status: 'Offline',
    calculate: 7853,
    fileName: ''
  },
  {
    id: 8,
    status: 'Online',
    calculate: 8563,
    fileName: ''
  },
  {
    id: 9,
    status: 'Offline',
    calculate: 4563,
    fileName: ''
  },
  {
    id: 10,
    status: 'Online',
    calculate: 9863,
    fileName: ''
  },
  {
    id: 11,
    status: 'Offline',
    calculate: 6563,
    fileName: ''
  },
  {
    id: 12,
    status: 'Online',
    calculate: 12353,
    fileName: ''
  },
  {
    id: 13,
    status: 'Offline',
    calculate: 5863,
    fileName: ''
  },
  {
    id: 14,
    status: 'Online',
    calculate: 7853,
    fileName: ''
  },
  {
    id: 15,
    status: 'Offline',
    calculate: 9563,
    fileName: ''
  }
];
