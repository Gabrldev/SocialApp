import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form'
const LoginPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery('(min-width: 1000px)')
  const alt = theme.palette.background.alt

  return (
    <Box>
      <Box width='100%' backgroundColor={alt} p='1rem 6%' textAlign='center'>
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
        >
          SocialApp
        </Typography>
      </Box>
      <Box
        width={isMobile ? '50%' : '100%'}
        m='2rem auto'
        p='2rem'
        borderRadius='1.rem'
        backgroundColor={alt}
      >
        <Typography
          fontWeight='500'
          variant='h5'
          sx={{
            mb: '1.5rem'
          }}
        >
          Welcome to SocialApp
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}
export default LoginPage
