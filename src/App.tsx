import React from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import { GalleriesProvider } from "./contexts/GalleriesContext";
import { FlickrProvider } from "./contexts/FlickrContext";

function App() {
  return (
    <div className="App">
      <FlickrProvider>
        <GalleriesProvider>
          <Dashboard />
        </GalleriesProvider>
      </FlickrProvider>
    </div>
  );
}

export default App;
