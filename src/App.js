import NavBar from "./navBar/NavBar";
import StartPage from "./startPage/StartPage";
import Todo from "./Todos/Todo";

function App() {
  return (
    <>
      <StartPage>
        <NavBar />
      </StartPage>
      {/* <Todo /> */}
    </>
  );
}

export default App;
