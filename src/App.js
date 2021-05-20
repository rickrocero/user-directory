import React from 'react';
// import SearchForm from './components/SearchForm';
// import ResultList from './components/ResultList';
import API from './utils/API';

class App extends React.Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random User API
  componentDidMount() {
    this.searchUser();
  }

  searchUser = () => {
    API.getUser()
      .then((res) => console.log('***********', res.data.results))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault()
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Employee Directory</h1>
        <hr/>
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default App;
