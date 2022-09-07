import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context'

import MUI from '../muiComponents'
import MuiDrawer from '../components/MuiDrawer'
import Popover from './Popover/Popover'
import SearchBar from './SearchBar/SearchBar'

type NavbarProps = {
  text: string
  handleChange: any
}

const Navbar = ({ text, handleChange }: NavbarProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <MUI.Box
        sx={{ boxShadow: 2, p: 1.5 }}
        style={theme}
        component={MUI.Paper}
      >
        <MUI.Grid container direction="row" alignItems="center">
          <MuiDrawer />
          <MUI.Grid item xs={4}>
            <MUI.Typography variant="h4" component="h1" m={2}>
              {text}
            </MUI.Typography>
          </MUI.Grid>
          <MUI.Grid item xs={6}>
            <SearchBar />
          </MUI.Grid>
          <MUI.Grid item xs={1}>
            <Popover />
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Box>
    </>
  )
}

export default Navbar
