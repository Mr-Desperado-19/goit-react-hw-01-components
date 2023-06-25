import Profile from "../profile";
import Statistics from "../statistics";
import FriendList from "../friendList";
import TransactionHistory from "../transactionHistory";



const App = () => {
  return (
    <div>
        <Profile />
        <Statistics />
        <FriendList />
        <TransactionHistory />
    </div>
  );
};

export default App;
