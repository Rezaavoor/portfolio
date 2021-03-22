import { css, useTheme } from '@emotion/react'
import Head from 'next/head'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  darkState: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function Home({darkState : [isDark,setIsDark]}: Props) {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>Reza Hosseini</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <div css={css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-weight: ${theme.fontWeight.regular};
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}>
        <p>Reza Hosseini</p>
        <button onClick={()=>setIsDark(!isDark)} >Toggle darkmode</button>
        </div>
    </div>
  )
}
