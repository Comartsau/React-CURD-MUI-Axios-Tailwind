import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: '8px 5px', // กำหนดค่า padding ที่ต้องการ
      },
    },
  },
});

export default theme;