
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useEffect, useState} from 'react';
import { getUsers , deleteUser } from '../service/api';
import { Link } from 'react-router-dom';



function AllUser() {

  const [user,setUser] = useState([])


  useEffect(() => {
    getUserDetails()
  },[])

  const getUserDetails = async () => {
   let response = await getUsers()
   setUser(response.data)
  }

  const deleteUserData = async (id) => {
    await deleteUser(id)
    getUserDetails()
  }


  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  return (
    <div className='flex justify-center ' style={{marginTop:"30px"}}>

      <Table>
        <TableHead >
          <TableRow style={{background:"linear-gradient(-2deg, #0070BB, #7B68EE)" }}>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Id</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Image</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Name</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Detail</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Price</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Stock</TableCell>
            <TableCell align="center" style={{color:"#fff", fontSize:"16px", borderRightWidth: 1 }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              user.map((user)=> {
                return (
                  <TableRow>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>{user.id}</TableCell>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>
                        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={user.image} style={{ maxWidth: "50px", maxHeight: "auto" }} />
                        </div>
                    </TableCell>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>{user.name}</TableCell>
                    <TableCell 
                    align="center" 
                    sx={{padding:"5px",borderRightWidth: 1 }}
                    >{user.detail}</TableCell>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>{formatNumber(user.price)}</TableCell>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>{formatNumber(user.stock)}</TableCell>
                    <TableCell align="center" style={{borderRightWidth: 1 }}>
                      <Button variant='contained' sx={{margin:"10px"}} component = {Link} to={`/edit/${user.id}`} >Edit</Button>
                      <Button 
                      variant='contained'
                      sx={{margin:"10px" , 
                      background:"#d32f2f" , 
                      "&:active":{ background:"#b71c1c"} ,
                      "&:hover":{background:"#b71c1c"}
                       }} onClick={()=>deleteUserData(user.id)} >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            }
        </TableBody>
      </Table>

      </div>
  )
}

export default AllUser