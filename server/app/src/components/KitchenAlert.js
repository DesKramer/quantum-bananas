import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getKitchen } from "../actions/kitchen";
import store from "../store";
import { latestKitchen } from "../io";

const KitchenAlert = ({ item }) => {
  useEffect(() => {
    store.dispatch(getKitchen());
    latestKitchen((err, kitchen) => console.log(kitchen));
  }, []);

  if (Object.keys(item).length !== 0) {
    const objects = item.objects.split(",");

    return (
      <Fragment>
        <h2>is: {item.kitchen}</h2>
        {item.messy ? "The kitchen is messy" : "The kitchen is not messy"}
        <p>Can see : {item.objects}</p>
        {objects.length > 0 ? (
          <Fragment>
            <p>You NEED to clean the following:</p>
            <ul>
              {objects.map((object, index) => {
                return <li key={index}>{object}</li>;
              })}
            </ul>
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  } else {
    return (
      <div>
        <h2>AI Kitchen Helper detects no mess...</h2>
      </div>
    );
  }
};

KitchenAlert.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.kitchen,
});

export default connect(mapStateToProps, {
  getKitchen,
})(KitchenAlert);
