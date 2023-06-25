import User from "../user";
import Data from "../data";
import Friends from "../friends";
import Transactions from "../transactions";



const App = () => {
  return (
    <div>
        <User />
        <Data />
        <Friends />
        <Transactions />
    </div>
  );
};

export default App;
