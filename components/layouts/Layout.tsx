import { FC } from "react"
import Head from "next/head"

import { Navbar } from "../ui"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cookie Master</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{
        padding: "20px 40px",
      }}>
        {
          children
        }
      </main>
    </>
  )
}