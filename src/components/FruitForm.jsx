import { useState } from "react";

export default function FruitForm({ handleAdd }) {
    // State
	const [nouveauFruit, setNouveauFruit] = useState("");

    // Comporytements
    const handleSubmit = (event) => {
		event.preventDefault();
		// alert("handleSubmit");
		// console.log(inputRef.current.value);

	

		// manipulation sur la copie du state
		const id = new Date().getTime();
		const nom = nouveauFruit;
		const fruitAAjouter = { id, nom }
		// fruitsCopy.push(fruitAAjouter);

		// console.log(fruitsCopy);

		// modifier le state avec setter
        handleAdd(fruitAAjouter);
		setNouveauFruit("");
	}
    
	const heandleChange = (event) => {
		// console.log(valueAfterChange);
		setNouveauFruit(event.target.value);

	}

    // Render

    return (<form action="submit" onSubmit={handleSubmit}>
        <input
            value={nouveauFruit}
            // ref={inputRef}
            type="text"
            placeholder="Ajouter un fruit..."
            onChange={heandleChange}
        />
        <button>Ajouter +</button>
    </form>);
}