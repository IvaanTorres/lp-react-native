import { backgroundColors } from '../constants/colors';

export default getPokemonBackground = (type) => {
  switch (type) {
    case 'grass':
      return backgroundColors.grass;
    case 'poison':
      return backgroundColors.poison;
    case 'fire':
      return backgroundColors.fire;
    case 'flying':
      return backgroundColors.flying;
    case 'water':
      return backgroundColors.water;
    case 'bug':
      return backgroundColors.bug;
    case 'normal':
      return backgroundColors.normal;
    case 'electric':
      return backgroundColors.electric;
    case 'ground':
      return backgroundColors.ground;
    case 'fairy':
      return backgroundColors.fairy;
    case 'fighting':
      return backgroundColors.fighting;
    case 'psychic':
      return backgroundColors.psychic;
    case 'rock':
      return backgroundColors.rock;
    case 'ghost':
      return backgroundColors.ghost;
    case 'ice':
      return backgroundColors.ice;
    case 'dragon':
      return backgroundColors.dragon;
    case 'dark':
      return backgroundColors.dark;
    case 'steel':
      return backgroundColors.steel;
    default:
      return backgroundColors.normal;
  }
}