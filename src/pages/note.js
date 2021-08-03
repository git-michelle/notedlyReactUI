import React from "react";
import { useQuery, gql } from "@apollo/client";
import Note from "../components/Note";

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

const NotePage = (props) => {
  const id = props.match.params.id;

  const { loading, data, error } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Note not found</p>;

  console.log("the data is ", data);
  return (
    <div>
      <Note note={data.note} />
    </div>
  );
};

export default NotePage;
