import React from "react";
import ReactDOM from "react-dom";

// u need export Layout class from Layout.js
import Layout from "./components/Layout";
import Header from "./components/Header";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
