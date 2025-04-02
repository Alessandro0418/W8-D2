import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/Mynav";
import CustomFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import "./App.css";
import BookList from "./components/BookList";
import books from "./data/history.json";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main>
        <CustomNav tema="dark" />
        <div className="d-flex align-items-center justify-content-center mt-3">
          <Welcome />
        </div>
        {/* <AllTheBooks /> */}
        <BookList libri={books} />
      </main>
      <CustomFooter />
    </div>
  );
}

export default App;
