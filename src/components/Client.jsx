/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

const Client = ({clientImage , clientStatement, clientName }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={clientImage}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 0,
        }}
      />
      <p>{clientStatement}</p>
      <p style={{ fontStyle: "italic", marginTop: 0, fontWeight: 500, color: "green" }}>
        {clientName}</p>
    </div>
  );
};

Client.propTypes = {
  clientImage : PropTypes.string,
  clientStatement : PropTypes.string,
  clientName : PropTypes.string
};

Client.defaultProps = {
  clientImage : null,
  clientStatement : null,
  clientName : null
};

export default Client;
