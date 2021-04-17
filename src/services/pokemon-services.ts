export type pokemonTitelType = {
    name: string,
    url: string,
    index: number,
};

export type pokemonType = {
id: number,
base_experience: number,
height: number,
weight: number,
name: string,
species: string,
stats: {
    base_stat: number,
    stat: {
        name: string
    }
}[],
types: {
    type: {
        name: string
    }
}[],
}

export type pokemonSpeciesType = {
    flavor_text_entries: {
        flavor_text: string,
        language: {
            name: string,
        },
        version: {
            name: string,
        }
    }[]
}

export interface psType {
    url: string,
    getResult: (category : string, params : string) => Promise<any>,
    getList: (offset : number, limit: number) => Promise<pokemonTitelType[]>,
    getPokemon: (id : number) => Promise<pokemonType>,
    getPokemonSpecies: (id : number) => Promise<pokemonSpeciesType>,
}

export class PokemonServices implements psType {

    url = 'https://pokeapi.co/api/v2/';

    getResult = async (category : string, params : string) : Promise<any> => {

        const res = await fetch(`${this.url}${category}${params}`);

        if (!res.ok) {
            throw new Error(`Ошибка выполения запроса: ${this.url} \n статус: ${res.status}`);
        }

        return await res.json();
    };

    getList = async (offset : number, limit: number) : Promise<pokemonTitelType[]> => {
        const params = `?offset=${offset}&limit=${limit}`;

        const body = await this.getResult('pokemon', params);

        return body.results;
    }

    getPokemon = async (id : number) : Promise<pokemonType> => {
        const params = `/${id}`;

        const body = await this.getResult('pokemon', params);

        return body;
    }

    getPokemonSpecies = async (id : number) : Promise<pokemonSpeciesType> => {
        const params = `/${id}`;

        const body = await this.getResult('pokemon-species', params);

        return body;
    }

}