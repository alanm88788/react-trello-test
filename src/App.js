import Board from "./components/board";
import { cardMap } from "./data/mockup";

const App = () => {
  return <Board initial={cardMap} />;
};

export default App;
