import { Box, Stack, Typography, useTheme } from "@mui/material"

interface AuthHeaderProps {
  icon: any
  title: string
  subTitle: string
}

const AuthHeader = ({ icon, title, subTitle }: AuthHeaderProps) => {
  const theme = useTheme()
  const Icon = icon
  return (
    <Box sx={{ my: 2 }}>
      <Stack direction="row" justifyContent="center" mb={1}>
        <Icon className="h-16 w-16" />
      </Stack>
      <Typography
        textAlign="center"
        fontWeight="bold"
        variant="h2"
        color={theme.palette.primary.main}
      >
        {title}
      </Typography>
      <Typography
        textAlign="center"
        variant="h6"
        color="textSecondary"
        mt={1}
        mb={1.6}
      >
        {subTitle}
      </Typography>
    </Box>
  )
}

export default AuthHeader
