import React, { useEffect } from "react";

const MyNotes = () => {
  useEffect(() => {
    //update document title
    document.title = "My Notes - Notedly";
  });
  return (
    <div>
      <h1>My Notes</h1>
      <p>These are my notes</p>
    </div>
  );
};

export default MyNotes;
