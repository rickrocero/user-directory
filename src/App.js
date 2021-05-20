import React from 'react';
// import SearchForm from './components/SearchForm';
// import ResultList from './components/ResultList';
import API from './utils/API';
import Wrapper from './components/Wrapper';
import EmployeeCard from './components/EmployeeCard';

class App extends React.Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, hit the Random User API
  componentDidMount() {
    this.searchUser();
  }

  searchUser = () => {
    API.getUser()
      .then((res) => this.setState({ results: [...res.data.results]}))
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
      <Wrapper>
        <h1 className='text-center'>Employee Directory</h1>
        <hr/>
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        {/* <ResultList results={this.state.results} /> */}
        {this.state.results.map(pers => (
          <EmployeeCard
            firstName={pers.name.first}
            lastName={pers.name.last}
            email={pers.email}
            phone={pers.cell}
            image={pers.picture.thumbnail}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
