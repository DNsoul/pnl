import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';

const FindInput : React.FC = () => {

    const {searchText} = useSelector((state:IRootState) => state);

    const dispatch = useDispatch()

    const handlerSearch = (e:React.FormEvent<HTMLInputElement>) => {
        dispatch({type: "SEARCH_SET", payload: e.currentTarget.value.toLowerCase()});
    }

    return (
        <input className="panel__find-input" 
        maxLength={20} 
        value={searchText}
        onChange={handlerSearch}
        placeholder="search (name or id)"
        type="text"/>
    )
}

export default FindInput;