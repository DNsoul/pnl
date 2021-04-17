import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../reducers";
import { PokemonServices, pokemonTitelType } from "../../services/pokemon-services";
import InfiniteScroll from 'react-infinite-scroller';
import ListItem from "../listItem";

import "./style.scss";

const List: React.FC = () => {
    const dispatch  = useDispatch()
    const ps = useRef(new PokemonServices());

    const [pokList, setPokList] = useState<pokemonTitelType[]>([]);
    const [page, setPage] = useState(40);
    const [hasMore, setHasMore] = useState(false);

    const {searchText} = useSelector( (state:IRootState) => state);

    useEffect( () => {
        dispatch({type: "PS_SET", payload: new PokemonServices()});

        ps.current.getList(0,649)
        .then((res:pokemonTitelType[]) => {
            res.map((item, index) => item.index = index+1);
            setPokList(res);
            setHasMore(true);
        })
        .catch(() => {console.log("Ошибка")});

        }, [dispatch]
    );

    useEffect( () => {setPage(40); setHasMore(true)}, [searchText])

    const checkSearch = (pok:pokemonTitelType) : boolean => {

        if (isNaN(parseInt(searchText)))
            return pok.name.includes(searchText);
        else
            return pok.index === parseInt(searchText);
    }

    const loadFunc = () => {
        console.log(page);
        if (pokList.filter((item) => checkSearch(item)).length <=40 || page >= 649) {setHasMore(false); return};
        setPage(prev => prev+40);
    }

    return (
        <InfiniteScroll
            className="list"
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMore}
        >
            {
                pokList.filter((item) => checkSearch(item))
                .slice(0,page)
                .map( (item, index) => {
                    return (
                        <ListItem key={index} item={item}/>
                    )
                })
            }
        </InfiniteScroll>
    )
}

export default List;