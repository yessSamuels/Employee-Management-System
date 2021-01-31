import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from "./Main";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
    filteredResults: [],
    orderBool: false,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getUsers()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results || [],
          filteredResults: res.data.results || [],
        });
      })
      .catch((err) => console.log(err));
  };

  compareDesc = (firstEl, secondEl) =>
    firstEl.name.firstEl < secondEl.name.first ? -1 : 0;
  compareAsc = (firstEl, secondEl) =>
    firstEl.name.firstEl > secondEl.name.first ? -1 : 0;

  sortHelper = {
    desc: this.compareDesc,
    asc: this.compareAsc,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const filteredResults = this.state.result.filter((row) =>
      `${row.name.first} ${row.name.last}`
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    this.setState({ filteredResults: filteredResults });
  };

  sortName = () => {
    console.log("clicked");
    if (this.state.orderBool === false) {
      this.setState({
        filteredResults: this.state.filteredResults.sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        ),
        orderBool: true,
      });
    }
    if (this.state.orderBool === true) {
      this.setState({
        filteredResults: this.state.filteredResults.sort((a, b) =>
          b.name.last.localeCompare(a.name.last)
        ),
        orderBool: false,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header
          title={"Employee Directory"}
          subtitle={"Click Here"}/>
        <Main>
          <SearchBox
            handleInputChange={this.handleInputChange}
            search={this.state.search}/>
          <DataTable
            data={this.state.filteredResults}
            sortName={this.sortName}/>
        </Main>
      </Wrapper>
    );
  }
}

export default EmployeeContainer;