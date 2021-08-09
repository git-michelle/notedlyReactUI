import React from "react";
import { useQuery, gql } from "@apollo/client";
import Note from "../components/Note";
import { useParams } from "react-router-dom";

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NotePage = () => {
  // store the id found in the url as a variable
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Note not found</p>;
  console.log(data);

  // if the data is successful, display the data in our UI
  return <Note note={data.note} />;
};

export default NotePage;
