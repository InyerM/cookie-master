import NextLink from 'next/link'

import { AppBar, IconButton, Toolbar, Link, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link variant='h6' underline='none'>
            <Typography variant='h6' color='white'>
              Cookie Master
            </Typography>
          </Link>
        </NextLink>
        <div style={{
          flex: 1,
        }}/>
        <NextLink href='/theme-changer' passHref>
          <Link variant='h6' underline='none'>
            <Typography variant='h6' color='white'>
              Change Theme
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
