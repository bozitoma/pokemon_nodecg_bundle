import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { PartyTable } from './PartyTable';
// import { Foo } from './foo';
// import { Stack } from '@mui/material';
// import { KPTable } from './KPTable';
// import { K2PTable } from './K2PTable';
// import { K3PTable } from './K3PTable';
// import { K4PTable } from './K4PTable';
// import { K5PTable } from './K5PTable';
// import { K6PTable } from './K6PTable';

export function Tables() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: unknown, newValue: string) => {
    setValue(newValue);
  };

  return (
    // <Stack direction="row">
    <Box sx={{ height: '100%', width: '100%', typography: 'body1', display: 'flex' }}>
      <TabContext value={value}>
        <Box sx={{ bgcolor: 'primary.main' }}>
          <TabList
            orientation="vertical"
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
            sx={{ borderRight: 3, borderColor: 'divider' }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Party" value="1" />
            <Tab label="Pokemon" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <Box sx={{ bgcolor: '#fff', height: 720, width: 1280 }}>
          <TabPanel value="1">aa</TabPanel>
          <TabPanel value="2">aa</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Box>
      </TabContext>
    </Box>
    // </Stack>
  );
}
