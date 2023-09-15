# memory-game-react

[Live Demo]()

A simple memory game built using React as part of [The Odin Project's](https://www.theodinproject.com/) react course.

_This project was initally built during my first run of The Odin Project and can be viewed on the "old" branch [here](https://github.com/Ashish-Krishna-K/memory-game-react/tree/old). During my second run I am revisiting old projects and this time I chose to use TypeScript as a practice._

## Goal

Main purpose of this project is to demonstrate what I have learnt so far in react(which is mainly useState and useEffect) to that effect this project
uses a third party free API from [PokeAPI](https://pokeapi.co/) to fetch data. The data is fetched using useEffect and then promptly displayed to the user

## The Game

The game's objective is to simply click on various Pokemon characters that appear on the screen without clicking on previously clicked item. If the user clicks on a duplicate Item the game ends and the current score and best score is displayed to user.

## Future Plans

- Currently I have a state keeping track of current score(**currentScore**) and a state to keep track of items already clicked by the user(**selectedIds**), however a smarter way to do this would be to use the length of the **selectedIds** array as the currentScore, this has the benefits of mainting one source of truth and removing an additional state.

## Copyright and credits

**Pokémon and Pokémon character names are trademarks of Nintendo.**
**Data from [PokeAPI](https://pokeapi.co/)**