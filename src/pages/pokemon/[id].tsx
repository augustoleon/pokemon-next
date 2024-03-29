import { useState } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '../../../components/layouts';
import { Pokemon } from '@/interfaces';
import { getPokemonData, localFavorites } from '@/utils';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	
	const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));
	
	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || 'no-image'}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button color="gradient" ghost={!isInFavorites} onClick={onToggleFavorite}>
								{isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async ctx => {
	const pokemon151 = [...Array(151)].map((value, i) => `${i + 1}`);

	return {
		paths: pokemon151.map(id => ({
			params: { id },
		})),
		// No habrá ningun fallback, es decir, si la persona agrego un params que no existe va a devolver un 404
		// fallback: false,

		// Se llama antes del renderizado inicial cuando se usa 'blocking'
		// las rutas no devueltas en GSP esperaran que se genere el HTML de forma identica que el SSR
		// Luego se almacena en caché para futuras solicitudes
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const pokemon = await getPokemonData(id);

	if (!pokemon) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400, // 60*60*24 - Incremental static regeneration
	};
};
export default PokemonPage;
