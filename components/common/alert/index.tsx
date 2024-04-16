import React, { FC } from 'react';
import Alert from '@mui/material/Alert';
import { AlertProps } from '@mui/material';

interface ErrorAlertProps extends AlertProps {
  message: string;
  type?: "error" | "success" | "info" | "warning"
}

const ErrorAlert: FC<ErrorAlertProps> = ({ message, type="error", ...rest }) => {
  return (
    <Alert severity={type} sx={{ my: 1, borderRadius: 2 }} {...rest}>
      {message}
    </Alert>
  );
};

export default ErrorAlert;
