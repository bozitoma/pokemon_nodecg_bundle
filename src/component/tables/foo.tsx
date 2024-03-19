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

export function Foo() {
  const { repParty, repRanking } = useRepList();
  console.log(repRanking);

  const partyList = repParty?.map((e) => {
    return {
      id: e.id,
      player_name: e.player_name,
      pokemon1: e.pokemon1.name,
      pokemon2: e.pokemon2.name,
      pokemon3: e.pokemon3.name,
      pokemon4: e.pokemon4.name,
      pokemon5: e.pokemon5.name,
      pokemon6: e.pokemon6.name,
    };
  });

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 100,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'center', // セルテキストの表示位置
    },
    {
      field: 'player_name',
      headerName: 'player_name',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon1',
      headerName: 'pokemon1',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon2',
      headerName: 'pokemon2',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon3',
      headerName: 'pokemon3',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon4',
      headerName: 'pokemon4',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon5',
      headerName: 'pokemon5',
      type: 'string',
      width: 150,
      headerAlign: 'center', // 列ヘッダの表示位置
      align: 'left', // セルテキストの表示位置
    },
    {
      field: 'pokemon6',
      headerName: 'pokemon6',
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

  // 読み込みの瞬間はReplicantの値がundefindになることがあるようで、
  // undefaind（読み込みが完了するまで）の時は空配列を入れておくようにしてテーブル内にundefindが存在することを防ぐ
  const typed = partyList ? partyList : [];

  const onCellClick = (params: GridCellParams, event: MuiEvent, details: GridCallbackDetails) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };

  return (
    <Box sx={{ bgcolor: '#fff', height: 720, typography: 'body1', display: 'flex' }}>
      <DataGrid
        rows={typed}
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
