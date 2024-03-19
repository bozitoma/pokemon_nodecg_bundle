import { Box } from '@mui/material';
import { useRepList } from '../../hooks/useRepList';
import {
  DataGrid,
  GridCallbackDetails,
  GridCellParams,
  GridColDef,
  MuiEvent,
} from '@mui/x-data-grid';

export type Prop = {
  id: number;
  accountID: string;
  player_name: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
};

export function Foo2() {
  const { repRanking } = useRepList();
  const typed = repRanking ? repRanking : [];

  const partyList = [
    {
      Rank: typed[27].move[0].Rank,
      Name: typed[27].move[0].Name,
      Score: typed[27].move[0].Score,
    },
  ];

  // 読み込みの瞬間はReplicantの値がundefindになることがあるようで、
  // undefaind（読み込みが完了するまで）の時は空配列を入れておくようにしてテーブル内にundefindが存在することを防ぐ

  const columns: GridColDef[] = [
    {
      field: 'Rank',
      headerName: 'Rank',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'Name',
      headerName: 'Name',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'Score',
      headerName: 'Score',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
  ];

  const styles = {
    grid: {
      // 罫線の表示
      '.MuiDataGrid-toolbarContainer': {
        borderBottom: 'solid 1px rgba(224, 224, 224, 1)',
      },
      '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
        borderRight: 'solid 1px rgba(224, 224, 224, 1) !important',
      },

      // ヘッダーの設定
      '.MuiDataGrid-columnHeaders': {
        backgroundColor: '#4169e1',
        color: '#fff',
      },

      // セルの設定
      '.MuiDataGrid-cell': {
        backgroundColor: '#fff',
        color: '#696969',
      },

      // フッターの設定
      '.MuiDataGrid-footerContainer': {
        backgroundColor: '#f5f5f5',
      },
    },
  };

  const onCellClick = (params: GridCellParams, event: MuiEvent, details: GridCallbackDetails) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };

  return (
    <Box sx={{ bgcolor: '#fff', height: 720, typography: 'body1', display: 'flex' }}>
      <DataGrid
        rows={partyList}
        columns={columns}
        sx={styles.grid}
        density="standard" // セルの縦幅を指定
        hideFooterPagination // フッターのページネーションを非表示
        disableRowSelectionOnClick //ロウのクリックを無効
        onCellClick={onCellClick}
      />
    </Box>
  );
}
