import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../reducers";
import { pokemonSpeciesType, pokemonType } from "../../services/pokemon-services";

import "./style.scss";

const ItemInfo: React.FC = () => {

    const {ps, index, showPokemon} = useSelector((state:IRootState) => state);
    const [pokemon, setPokemon] = useState<pokemonType>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onLoad = () => {
        setLoading(true);
        document.body.setAttribute("style", "overflow: hidden;");

        ps?.getPokemon(index)
        .then ((pok) => {
            ps?.getPokemonSpecies(index).then( (spe) => {
                loadPokemon(pok, spe);
            }).catch( (reason) => {console.log(reason); setError(true);})
        }).catch( (reason) => {console.log(reason); setError(true);})
    }

    const loadPokemon = (pok:pokemonType, spe: pokemonSpeciesType) => {

        const species = spe.flavor_text_entries.filter( (item) =>
            ((item.language.name === "en") && (item.version.name === "white"))
        )[0];

        pok.species = species.flavor_text || "Not discription";

        setPokemon(pok);
        setLoading(false);
        setError(false);
    }

    useEffect( () => {
        showPokemon ? onLoad() : document.body.setAttribute("style", "overflow: auto;");
    }, [showPokemon]
    );

    return (
        <div className="popup__back" 
        style={{display: showPokemon ? "" : "none"}}
        onClick={() => {dispatch({type: "SHOW_SET", payload: false}); setLoading(true); setError(false)}}
        >
            {
                error ? <ErrorPage/> :
                loading ? <LoadingPage/> : 
                            <BodyPage pokemon={pokemon} dispatch={dispatch} setLoading={setLoading}/>
            }       
        </div>
    ) 
}


//Progress bar///
enum typeStat {
    "hp",
    "atk",
    "def",
    "s.atk",
    "s.def",
    "spd"
}

type ProgressBarProps = {
    count: number,
    idName: typeStat,
}

const ProgressBar:React.FC<ProgressBarProps> = ({count, idName}) => {

    return (
        <div className="progress-bar">
            <p className="progress-bar__title">{typeStat[idName] + ":" + count}</p>
            <div className="progress-bar__number" style={{width: (count/200*100)+"%"}}></div>
        </div>
    )
}

//Loading page///
const LoadingPage = () => {
    return (
        <div className="popup__panel">
            <h3>Loading...</h3>
        </div>
    )
}

//Error page//
const ErrorPage = () => {
    return (
        <div className="popup__panel">
            <h3>Error!</h3>
        </div>
    )
}

//Content page//
const BodyPage:React.FC<{pokemon:pokemonType | undefined, dispatch:any, setLoading: any}> = ({pokemon, dispatch, setLoading}) => {
    return (
    <div className="popup" onClick={(e) => {e.stopPropagation();}}>
        <div className="popup__panel">
            <h3>#{pokemon?.id} {pokemon?.name}</h3>
            <button className="popup__panel-close" onClick={() => {dispatch({type: "SHOW_SET", payload: false}); setLoading(true);}}>X</button>
        </div>
        <div className="popup__content">
            <div className="popup__main">
                <div className="popup__first-coloum">
                    <fieldset className="popup__img-cover">
                        <legend>image</legend>
                        <img className="popup__img" 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} 
                                alt="Pokemon"/>
                    </fieldset>
                    <fieldset className="popup__types">
                        <legend>types</legend>
                        {
                            pokemon?.types.map( (item, index) => {
                                return (
                                <span key={index} className={"types-color-"+item.type.name}>{item.type.name}</span>
                                )
                            }
                            )
                        }
                    </fieldset>
                </div>
                <div className="popup__second-coloum">
                    <fieldset>
                        <legend>general</legend>
                        <ul className="popup__general">
                            <li>Base exp: {pokemon?.base_experience}</li>
                            <li>Height: {pokemon!.height / 10}m</li>
                            <li>Weight: {pokemon!.weight / 10}kg</li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>stats</legend>
                        <div className="popup__stats">
                            {
                                pokemon?.stats.map( (state, index) => {
                                    return (
                                        <ProgressBar key={index} count={state.base_stat} idName={index}/>
                                    )
                                })
                            }
                        </div>
                    </fieldset>
                </div>
            </div>
            <fieldset className="popup__description">
                <legend>description</legend>
                {pokemon?.species}
            </fieldset>
        </div>
    </div>
    )
}

export default ItemInfo;