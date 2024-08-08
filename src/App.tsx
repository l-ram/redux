import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "../src/features/counter/Counter";
import "./App.css";
import { PostsList } from "./features/post/postsList";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PostsList />
      <AddPostForm />
    </>
  );
}

export default App;
