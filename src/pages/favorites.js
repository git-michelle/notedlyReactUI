import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    //update document title
    document.title = "Favorites - Notedly";
  });
  return (
    <div>
      <h1>Favorites</h1>
      <p>These are my favorites</p>
    </div>
  );
};

export default Favorites;
