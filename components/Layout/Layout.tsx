import Head from 'next/head'
import React, { ReactNode } from 'react'

import Header from './Header'
import Player from './Player'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <div
    className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden"
    style={{
      paddingTop: '40px',
    }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Player />
  </div>
)

export default Layout
