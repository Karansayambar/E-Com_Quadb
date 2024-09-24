import Navbar from "./components/Navbar";
import { CartCounterProvider } from "./Context/CountContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <CartCounterProvider>
        <MainPage />
      </CartCounterProvider>
    </div>
  );
}

export default App;
