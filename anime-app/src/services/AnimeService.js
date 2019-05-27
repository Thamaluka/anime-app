import React from 'react';
import axios from 'axios';


const endpoint = 'https://kitsu.io/api/edge/'
const headerOptions = {
    headers: {
        'Content-Type': 'application/json',
    }
}

class AnimeService extends React.Component {

    static async getAllAnimes() {
        const path = `/anime`;
        const uri = endpoint + path;
        try {
            const res = await axios.get(uri, headerOptions);
            return res
        } catch (error) {
            console.error(error)
        }
    }

    static async getPagination(uri) {
        try {
            const res = await axios.get(uri, headerOptions);
            return res;
        } catch (error) {
            console.error(error)
        }
    }


    static async getAnimeById(id) {
        const path = `/anime/${id}`;
        const uri = endpoint + path;
        try {
            const res = await axios.get(uri, headerOptions);
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }


    static async getAnimeFiterByTerm(term) {
        const path = `/anime?filter[text]=${term}`;
        const uri = endpoint + path;
        try {
            const res = await axios.get(uri, headerOptions);
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }

}

export default AnimeService;