/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Structure from './blocks/Structure'
import Tasks from './blocks/Tasks'
import Functions from './blocks/Functions'
import Contacts from './blocks/Contacts';
import Headers from './blocks/Headers'
import Footer from './blocks/Footer'

const All = () => (
  <ReactFullpage
    navigation
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Headers />
          <Structure />
          <Tasks />
          <Functions />
        </div>
      );
    }}
  />
);

export default All;
