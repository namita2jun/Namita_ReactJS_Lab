import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import ShowData from "./components/ShowData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
          <Route path="/" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
