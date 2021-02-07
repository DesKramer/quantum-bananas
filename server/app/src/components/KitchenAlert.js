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

export default KitchenAlert;
