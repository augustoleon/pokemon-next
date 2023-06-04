const toggleFavorite = (id: number) => {
	let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	if (favorites.includes(id)) {
		favorites = favorites.filter(pokeId => pokeId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
	if (typeof window === 'undefined') return false;

	const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	return favorites.includes(id);
};

const pokemons = (): number[] => {
	// No verificaremos si existe el type window, lo trabajaremos mediante un useEffect para tener ambos panoramas
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { toggleFavorite, existInFavorites, pokemons };
