import React from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import { GalleriesProvider } from "./contexts/GalleriesContext";
import { FlickrProvider } from "./contexts/FlickrContext";
import { SelectedPhotosProvider } from "./contexts/SelectedPhotosContext";

function App() {
  return (
    <div className="App">
      <FlickrProvider>
        <GalleriesProvider>
          <SelectedPhotosProvider>
            <Dashboard />
          </SelectedPhotosProvider>
        </GalleriesProvider>
      </FlickrProvider>
    </div>
  );
}

export default App;
