import { useState } from "react";

function App() {
	// state (état,données)
	const [fruits, setFruits] = useState([
		{ id: 1, nom: "Abricot" },
		{ id: 2, nom: "Banane" },
		{ id: 3, nom: "Cerise" }
	]);

	const [nouveauFruit, setNouveauFruit] = useState("");

	// const inputRef = useRef();


	// comportements
	const HandleDelete = (id) => {
		console.log(id);

		// copie du state
		const fruitsCopy = [...fruits];
		// const fruitsCopy = fruits.slice();

		// manipuler la copie du state
		const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)

		// modifier le state avec setter
		setFruits(fruitsCopyUpdated);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// alert("handleSubmit");
		// console.log(inputRef.current.value);
		
		// copie du state
		const fruitsCopy = [...fruits];
		
		// manipulation sur la copie du state
		const id = new Date().getTime();
		const nom = nouveauFruit;
		fruitsCopy.push({ id, nom});
		// console.log(fruitsCopy);

		// modifier le state avec setter
		setFruits(fruitsCopy);
		setNouveauFruit("");
	}

	const heandleChange = (event) => {
		// console.log(valueAfterChange);
		setNouveauFruit(event.target.value);

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
		<form action="submit" onSubmit={handleSubmit}>
			<input 
				value={nouveauFruit} 
				// ref={inputRef}
				type="text" 
				placeholder="Ajouter un fruit..." 
				onChange={heandleChange}
				/>
			<button>Ajouter +</button>
		</form>
	</div>
}

export default App;

// Gestion du formulaire
// 1. Création du formulaire
// 2. Soumission du formulaire (onSubmit / handleSubmit)
// 3. Collecte des données du formulaire
// 3a. méthode 1 : documentGetElementById "React" (useRef)
// 3b. méthode 2 : sync descente / acendante (onChange / handleChange)