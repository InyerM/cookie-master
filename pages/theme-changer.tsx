import { ChangeEvent, useState, FC } from 'react'
import { GetServerSideProps } from 'next'

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import Cookies from 'js-cookie'
import axios from 'axios'

import { Layout } from "../components/layouts"

interface Props {
  theme: string
}

const ThemeChanger: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.value
    setCurrentTheme( theme )

    Cookies.set('theme', theme)
    localStorage.setItem('theme', theme)
  }

  const onClick = async () => {
    const { data } = await axios.get('/api/hello')
    console.log("🚀 ~ file: theme-changer.tsx ~ line 27 ~ onClick ~ data", data)
  }


  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup
              value={ currentTheme }
              onChange={ onThemeChange }
            >
              <FormControlLabel value='light' control={ <Radio/> } label='Light'/>
              <FormControlLabel value='dark' control={ <Radio/> } label='Dark'/>
              <FormControlLabel value='custom' control={ <Radio/> } label='Custom'/>
            </RadioGroup>
          </FormControl>
          <Button variant='contained' color='primary' onClick={ onClick }>Request</Button>
        </CardContent>
      </Card>
    </Layout>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const { theme = 'light' } = req.cookies
  const validThemes = ['light', 'dark', 'custom']

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark'
    }
  }
}

export default ThemeChanger