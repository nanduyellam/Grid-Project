import React from 'react'
import { Divider, Typography } from "@mui/material";
import { Box } from '@mui/material';
export default function Header() {
  return (
    <div>
     <Box  sx={{ width: '100%' }}>
     <Typography variant="h3">Contact App</Typography>
     <Divider/>
     </Box>
    </div>
  )
}