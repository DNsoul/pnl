import { psType } from "../services/pokemon-services";

export interface IRootState {
    ps: psType | null,
    index: number,
    showPokemon: boolean,
    searchText: string,
}

const initialState: IRootState = { 
    ps: null,
    index: 0,
    showPokemon: false,
    searchText: "",
}

const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'PS_SET':
            return Object.assign({}, state, {ps:action.payload});
        case 'ID_SET':
            return Object.assign({}, state, action.payload);
        case 'SHOW_SET':
            return Object.assign({}, state, {showPokemon: action.payload});
        case 'SEARCH_SET':
            return Object.assign({}, state, {searchText: action.payload});
        default:
            return state;
    }
}

export default reducer;