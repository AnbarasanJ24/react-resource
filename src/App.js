import React from "react";
import SearchBar from './SearchFunctionality/SearchBar'
import unsplash from "./api/unsplash";
import ImageList from "./ImageList/ImageList";
class App extends React.Component {

    state = { images: [] }

    onSerachSubmit = async (term) => {
        console.log(term)

        const searchConfig = {
            params: {
                query: term
            }
        }
        const response = await unsplash.get("/search/photos", searchConfig);
        console.log(response.data.results)
        this.setState({ images: response.data.results })

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSerachSubmit={this.onSerachSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}


export default App