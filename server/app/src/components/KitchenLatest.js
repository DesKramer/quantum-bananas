import React, { Component } from "react";
import API from "../api";

class KitchenLatest extends Component {
  state = {
    item: {},
  };

  fetchLatestKitchen = async () => {
    await API.get("/kitchens/latest")
      .then((response) => {
        const item = response.data;
        this.setState({ item });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.fetchLatestKitchen();
  };

  render() {
    const { kitchen, messy, objects } = this.state.item;

    if (kitchen || messy || objects) {
      return (
        <React.Fragment>
          <h2>{kitchen}</h2>
          {messy ? "The kitchen is messy" : "The kitchen is not messy"}
          {this.showObjects(objects)}
        </React.Fragment>
      );
    } else {
      return <div>Unable to find latest kitchen data.</div>;
    }
  }

  showObjects = (str) => {
    var objects = str.split(",");
    if (objects.length > 0) {
      return (
        <React.Fragment>
          <p>You NEED to clean the following:</p>
          <ul>
            {objects.map((object, index) => {
              return <li key={index}>{object}</li>;
            })}
          </ul>
        </React.Fragment>
      );
    }
    return "";
  };
}

export default KitchenLatest;
