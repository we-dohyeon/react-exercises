import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    monster: {},
  };

  componentDidMount() {
    this.fetchMonster();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchMonster();
    }
  }

  fetchMonster = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ monster: res }));
  };

  goToMain = () => {
    this.props.history.push("/monsters");
  };

  goToPrevious = () => {
    this.props.history.push(`/monsters/detail/${Number(this.props.match.params.id) - 1}`);
  };

  goToNext = () => {
    this.props.history.push(`/monsters/detail/${Number(this.props.match.params.id) + 1}`);
  };

  render() {
    const { monster } = this.state;

    return (
      <div className="url-parameters">
        {monster.id && (
          <>
            <div className="btn-wrapper">
              <button onClick={this.goToMain}>Back to Monsters List</button>
            </div>
            <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
            <div className="btn-wrapper">
              <button onClick={this.goToPrevious}>Previous</button>
              <button onClick={this.goToNext}>Next</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MonsterDetail;
