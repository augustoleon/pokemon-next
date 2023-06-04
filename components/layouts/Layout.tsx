import { FC, ReactElement } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
  children: ReactElement
  title?: string,
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name="author" content="Cesar" />
            <meta name="description" content={`Información sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        </Head>

        <Navbar/>
        <main style={{
          padding: '0px 20px'
        }}>
          {children}
        </main>
    </>
  )
}
