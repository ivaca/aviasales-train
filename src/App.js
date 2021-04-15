import "./App.css";
import TicketList from "./components/ticket-list/ticket-list.component";
import Filter from "./components/filter/filter.component";
function App() {
  return (
    <div className="App">
      <Filter />
      <TicketList />
    </div>
  );
}

export default App;
