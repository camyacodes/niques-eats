import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_ME } from '../utils/queries';
import Auth from "../utils/auth";

const Profile = () => {
  const userData = 1;
  // const { data: userData } = useQuery(QUERY_ME);
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(QUERY_USER, {
  //   variables: { username: userParam }
  // });

  // const user = data?.user || {};
  const loggedIn = Auth.loggedIn();

  return (
    <div className="flex-row mb-3">
      {loggedIn && userData ? (
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userData.me.username}'s profile.
        </h2>
      ) : null}
    </div>
  );
};

{
  /* <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {data.username}'s profile.
        </h2> */
}

export default Profile;
