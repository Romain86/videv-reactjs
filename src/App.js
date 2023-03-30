import { useState } from "react";

function App() {
	// state (état,données)
	const [fruits, setFruits] = useState([
		{ id: 1, nom: "Abricot" },
		{ id: 2, nom: "Banane" },
		{ id: 3, nom: "Cerise" }
	]);


	// comportements
	const HandleDelete = (id) => {
		console.log(id);

		// copie du state
		const fruitsCopy = [...fruits];
		// const fruitsCopy = fruits.slice();

		// manipuler la copie du state
		const fruitsCopyUpdated =  fruitsCopy.filter(fruit => fruit.id !== id)

		// modifier le state avec setter
		setFruits(fruitsCopyUpdated);
	}

	// affichage (render)
	return <div>
		<h1>Liste de fruits</h1>
		<ul>
			{fruits.map((fruit) => (
				<li key={fruit.id}>
					{fruit.nom} <button onClick={() => HandleDelete(fruit.id)}>X</button>
				</li>
		))}</ul>
	</div>
}

export default App;
