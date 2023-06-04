import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
	pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemons.map(id => (
				<FavoriteCardPokemon key={id} id={id} />
			))}
		</Grid.Container>
	);
};
