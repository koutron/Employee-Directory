import React from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm";

class MainContainer extends React.Component {
  state = {
    people: [],
    search: ""
  }

  searchPeople() {
    API.search().then(res => {
      this.setState({ people: res.data.results });
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    this.filterResults();
  }

  filterResults() {
    const filteredPeople = this.state.people.filter(person => {
      console.log(person);
      if(person.name.last.includes(this.state.search)){
        return person;
      }
    });

    this.setState({people: filteredPeople})
  }

  componentDidMount() {
    this.searchPeople();
  }

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable people={this.state.people} />
      </div>
    )
  }
}

export default MainContainer;