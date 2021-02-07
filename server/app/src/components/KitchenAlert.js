import React, { Fragment, useState, useEffect } from "react";
import { latestKitchen } from "../io";

const KitchenAlert = () => {
  const [item, updateItem] = useState({});

  useEffect(() => {
    latestKitchen((err, kitchen) => {
      updateItem((item) => kitchen);
    });
  }, []);

  if (Object.keys(item).length === 0) {
    return (
      <div>
        <h3>Please run AI Kitchen Helper...</h3>
      </div>
    );
  }

  const objects = item.objects.split(",");

  return (
    <div className="kitchen__latest">
      <p>
        {item.messy ? "We've detected a mess" : "We've detected no mess"}
        {!!item.kitchen && (
          <Fragment>
            {" in"}
            <span className="is-bold"> {item.kitchen}</span>
            {" kitchen"}
          </Fragment>
        )}
        !
      </p>
      {objects[0] !== "" && (
        <Fragment>
          <p>You NEED to clean the following:</p>
          <ul className="kitchen__list">
            {objects.map((object, index) => {
              return (
                <li
                  key={"name--" + object.replace(/\s/g, "")}
                  className="kitchen__list__item"
                >
                  {object}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default KitchenAlert;
