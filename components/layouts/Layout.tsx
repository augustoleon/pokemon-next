import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
	children: ReactElement;
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name="author" content="Cesar" />
				<meta name="description" content={`Información sobre el pokémon ${title}`} />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />

				<meta property="og:title" content={`Información sobre ${title}`} />
				<meta property="og:description" content={`Esta es la página sobre ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />
			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};
