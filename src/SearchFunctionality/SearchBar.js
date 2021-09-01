import React from 'react';

class SearchBar extends React.Component {

    state = { term: '', password: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSerachSubmit(this.state.term)

    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label id="search">Image Search</label>
                        <input type="search" value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                    {/* <div className="field">
                        <label id="password">Password</label>
                        <input type="password" value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })} />
                        {
                            this.state.password.length < 4 ? 'Password must be alteast four character' : ''
                        }
                    </div> */}
                </form>
            </div>
        );
    }
}

export default SearchBar;