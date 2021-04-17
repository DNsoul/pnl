import React from "react";
import { useDispatch } from "react-redux";

import { pokemonTitelType } from "../../services/pokemon-services";

import './style.scss';

type itemTypeProps = {
    item:pokemonTitelType,
}

const ListItem: React.FC<itemTypeProps> = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div tabIndex={item.index} className="card" onClick={() => {dispatch({type: "ID_SET", payload: {index: item.index, showPokemon: true}})}}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.index}.svg`}
            alt="Pokemon" className="card__image"/>
            <div className="card__info">
                <h2 className="card__info-title">{item.name}</h2>
            </div>
        </div>
    )
}

export default ListItem;