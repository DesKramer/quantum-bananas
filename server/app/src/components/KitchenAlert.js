import React, { Fragment, useState, useEffect } from "react";
import { latestKitchen } from "../io";

const KitchenAlert = () => {
  const [item, updateItem] = useState({});

  useEffect(() => {
    latestKitchen((err, kitchen) => {
      updateItem((item) => kitchen);
    });
  }, []);

  if (Object.keys(item).length !== 0) {
    const objects = item.objects.split(",");

    return (
      <div className="kitchen__latest">
        <p>
          {item.messy
            ? "AI Kitchen Helper detects a mess"
            : "AI Kitchen Helper detects no mess"}
          {item.kitchen ? (
            <Fragment>
              {" "}
              in
              <span className="is-bold"> {item.kitchen}</span>
            </Fragment>
          ) : (
            ""
          )}
          !
        </p>
        {objects[0] !== "" ? (
          <Fragment>
            <p>You NEED to clean the following:</p>
            <ul className="kitchen__list">
              {objects.map((object, index) => {
                return (
                  <li key={index} className="kitchen__list__item">
                    {object}
                  </li>
                );
              })}
            </ul>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please run AI Kitchen Helper...</h3>
      </div>
    );
  }
};

export default KitchenAlert;
