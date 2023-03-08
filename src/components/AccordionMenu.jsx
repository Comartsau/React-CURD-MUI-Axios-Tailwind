import Box from '@mui/material/Box';

function AccordionMenu() {
  return (
    <Box
    sx={{
      flexGrow: 1,
      borderRadius: '0 0 12px',
      border: 'none',
      boxShadow: '0px 2px 2px -1px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.14), 0px 3px 1px 0px rgba(0,0,0,0.12)',
      width: 150,
      height: 200,
      backgroundImage: 'linear-gradient(5deg, #185aad,#43c2a2)',
      '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
      },
    }}
  />
  )
}

export default AccordionMenu;