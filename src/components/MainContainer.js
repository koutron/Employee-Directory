import React from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm";

class MainContainer extends React.Component {
  state = {
    people: [],
    search: "",
    filteredPeople: []
  }

  originalPeople = [];
  ascending = true;

  searchPeople() {
    API.search().then(res => {
      this.setState({ people: res.data.results });
      this.setState({ filteredPeople: res.data.results });
      //this.originalPeople = res.data.results;
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, this.filterResults)

    

  }

  filterResults() {
    
    //this.setState({ people: this.originalPeople });
    // eslint-disable-next-line
    if( !this.state.search.length ){
     
      this.setState({ filteredPeople: this.state.people })
    } else {
      const newFiltered = this.state.people.filter(person => {
        if (person.name.last.includes(this.state.search)) {
          return person;
        }
      });
      this.setState({ filteredPeople: newFiltered });
    }
  }

  componentDidMount() {
    this.searchPeople();
  }

  sorting = (prop1, prop2) => {
    if (this.ascending) {
      this.state.people.sort(function (a, b) {
        let nameA = a[prop1][prop2].toUpperCase();
        let nameB = b[prop1][prop2].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({ people: this.state.people });
    } else {
      this.state.people.sort(function (a, b) {
        let nameA = a[prop1][prop2].toUpperCase();
        let nameB = b[prop1][prop2].toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      this.setState({ people: this.state.people });
    }
    this.ascending = !this.ascending;
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">This is an employee directory built with React.  Search employees by their last name and sort the table by first name, last name, city, state, or country.</p>
        </div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable people={this.state.filteredPeople} sorting={this.sorting} />
      </div>
    )
  }
}

export default MainContainer;