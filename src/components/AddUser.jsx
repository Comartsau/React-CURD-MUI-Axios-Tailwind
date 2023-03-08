import { Button, FormControl, FormGroup,TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { addUser } from '../service/api'
// import { useNavigate } from 'react-router-dom'

const initialValues = {
  name: "" ,
  detail: "",
  image: "",
  price: "",
  stock: ""
}

function AddUser() {
  const [user,setUser] = useState(initialValues) 
  // const navigate = useNavigate()


  const onValueChange = (e) => {
    setUser({...user,[e.name]:e.value})
  }

  const addUserDetail = async () => {
    await addUser(user)
    setUser({
      name: "",
      detail: "",
      image: "",
      price: "",
      stock: "",
    });
    // navigate('/') // เมื่อกด Add สินค้าจะ link ไปที่หน้า / (แสดงสินค้าให้เลย)

  }

  return (
    <div className='flex justify-center items-center mt-5  '>
    <FormGroup>
      <Typography variant='h5'>Add User </Typography>
      <FormControl >
      <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          sx={{width:"400px",marginTop:"10px"}}
          onChange={(e)=> onValueChange(e.target) } 
          name="name" 
          value={user.name}
      
        />
      </FormControl>
      <FormControl >
      <TextField
          id="outlined-multiline-flexible"
          label="Detail"
          multiline
          maxRows={4}
          sx={{width:"400px",marginTop:"10px"}}
          onChange={(e)=> onValueChange(e.target) } 
          name="detail" 
          value={user.detail}
      
        />
      </FormControl>
      <FormControl >
      <TextField
          id="outlined-multiline-flexible"
          label="Picture"
          multiline
          maxRows={4}
          sx={{width:"400px",marginTop:"10px"}}
          onChange={(e)=> onValueChange(e.target) } 
          name="image"
          value={user.image}
        />
      </FormControl>
      <FormControl >
      <TextField
          id="outlined-multiline-flexible"
          label="Price"
          multiline
          maxRows={4}
          sx={{width:"400px",marginTop:"10px"}}
          onChange={(e)=> onValueChange(e.target) } 
          name="price"
          value={user.price}
        />
      </FormControl>
      <FormControl >
      <TextField
          id="outlined-multiline-flexible"
          label="Stock"
          multiline
          maxRows={4}
          sx={{width:"400px",marginTop:"10px"}}
          onChange={(e)=>  onValueChange(e.target) } 
          name="stock"
          value={user.stock}
        />
      </FormControl>
      <Button variant='contained' sx={{marginTop:"10px"}} onClick={()=>addUserDetail()}>Add</Button>
    </FormGroup>
    </div>
  )
}

export default AddUser