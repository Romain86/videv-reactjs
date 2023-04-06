import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
	// state (état,données)
	const [fruits, setFruits] = useState([
		{ id: 1, nom: "Abricot" },
		{ id: 2, nom: "Banane" },
		{ id: 3, nom: "Cerise" }
	]);

	// const inputRef = useRef();


	// comportements
	const HandleDelete = (id) => {
		// console.log(id);

		// copie du state
		const fruitsCopy = [...fruits];
		// const fruitsCopy = fruits.slice();

		// manipuler la copie du state
		const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)

		// modifier le state avec setter
		setFruits(fruitsCopyUpdated);
	}

	const handleAdd = (fruitAAjouter) => {
		// copie du state
		const fruitsCopy = [...fruits];

		// manipulation sur la copie du state
		fruitsCopy.push(fruitAAjouter);

		// modifier le state avec setter
		setFruits(fruitsCopy);

	}

	const afficherFruitPrefere = (fruitNom) => {
		alert(`J'aime trop ce fruit: ${fruitNom}`)
	}

	// affichage (render)
	return <div>
		<h1>Liste de fruits</h1>
		<ul>
			{fruits.map((fruit) => (
				<Fruit fruitInfo={fruit} 
				onClick={() => afficherFruitPrefere(fruit.nom)} 
				key={fruit.id}/>
			))}</ul>
		<FruitForm handleAdd={handleAdd}/>
	</div>
}

export default App;

// Gestion du formulaire
// 1. Création du formulaire
// 2. Soumission du formulaire (onSubmit / handleSubmit)
// 3. Collecte des données du formulaire
// 3a. méthode 1 : documentGetElementById "React" (useRef)
// 3b. méthode 2 : sync descente / acendante (onChange / handleChange)