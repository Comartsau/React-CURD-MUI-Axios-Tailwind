
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { display, flexbox, textAlign } from '@mui/system';
import { Margin } from '@mui/icons-material';

function NavMenu() {

  return (

    <AppBar position="static" sx={{
        background:"linear-gradient(5deg, #43c2a2, #185aad)",
        }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{marginTop:"-10px"}}
            >
            <NavLink to="/"><MenuIcon /></NavLink>
            </IconButton>
            <span>Comartsau Studio</span>
          </div>
        <div>
        </div>
        <div className="flex justify-center ">
        <NavLink to="/add" className="text-lg mx-6"  > Add Product  </NavLink>
        </div>
        </Toolbar>
      </AppBar>


  )
}

export default NavMenu