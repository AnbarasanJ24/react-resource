import React from "react";
import axios from 'axios';
import SearchBar from './SearchFunctionality/SearchBar'

class App extends React.Component {

    onSerachSubmit(term) {
        console.log(term)
        const url = "https://api.unsplash.com/search/photos";
        const searchConfig = {
            headers: {
                Authorization: 'Client-ID KXSv44wiKDOia4q_0rsZeL5TK28GyQ89c8KUFemAMQs'
            },
            params: {
                query: term
            }
        }
        axios.get(url, searchConfig).then(response => console.log(response))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSerachSubmit={this.onSerachSubmit} />
            </div>
        );
    }
}


export default App