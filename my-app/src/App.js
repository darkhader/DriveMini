import logo from "./logo.svg";
import "./App.css";
import FileBrowser, { Icons } from "react-keyed-file-browser";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FileBrowser
        files={[]}
        icons={{
          File: <i className="file" aria-hidden="true" />,
          Image: <i className="file-image" aria-hidden="true" />,
          PDF: <i className="file-pdf" aria-hidden="true" />,
          Rename: <i className="i-cursor" aria-hidden="true" />,
          Folder: <i className="folder" aria-hidden="true" />,
          FolderOpen: <i className="folder-open" aria-hidden="true" />,
          Delete: <i className="trash" aria-hidden="true" />,
          Loading: <i className="circle-notch spin" aria-hidden="true" />,
        }}
      />
    </div>
  );
}

export default App;
