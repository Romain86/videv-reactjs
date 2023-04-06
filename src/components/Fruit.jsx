export default function Fruit({fruitInfo, onFruitDelete}) {
    // state
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;

    // comportements

    // affichage (render)
    return (<li>
        {fruitInfo.nom} <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
    );
}