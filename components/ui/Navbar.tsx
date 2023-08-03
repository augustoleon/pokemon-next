import NextLink from 'next/link';
import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react';

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: 'flex',
				width: 'flexDirection',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0px 20px',
				backgroundColor: theme?.colors.gray900.value,
			}}
		>
			{/* Componente Image nos ayuda con Lazy load, prefetch, responsive */}
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
				alt="pokémon"
				width={70}
				height={70}
			/>
			<NextLink href="/" passHref legacyBehavior>
				<Link>
					<Text color="white" h2>
						P
					</Text>
					<Text color="red" h3>
					okémon
					</Text>
				</Link>
			</NextLink>
			{/* Propiedad css para los componentes propios de NextUI, en lugar de style*/}
			<Spacer css={{ flex: 1 }} />
			<NextLink href="/favorites" passHref legacyBehavior>
				<Link>
					<Text color="white">Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	);
};
