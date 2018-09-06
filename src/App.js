import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { connect } from "react-redux";
import { resetCounter, incrementCounter, deleteCounter } from "./actions";
import "./App.css";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    const {
      dispatch,
      counters,
      resetCounter,
      incrementCounter,
      deleteCounter
    } = this.props;
    return (
      <React.Fragment>
        <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onIncrement={incrementCounter}
            onDelete={deleteCounter}
            onReset={resetCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      resetCounter: resetCounter,
      incrementCounter: incrementCounter,
      deleteCounter: deleteCounter
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
