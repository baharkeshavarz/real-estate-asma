import React from 'react'
import { Box, CircularProgress } from '@mui/material';

interface LoaderProps {
    size?: number;
}

const Loader = ({ size= 30 }: LoaderProps) => {
  return (
     <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
       }}>
       <CircularProgress size={size} color="info" />
    </Box>
  )
}

export default Loader
