import Profile from "../profile";
import Statistics from "../statistics";
import FriendList from "../friendList";
import TransactionHistory from "../transactionHistory";

import user from "../../user/user.json";
import data from "../../data/data.json";
import friends from "../../friends/friends.json";
import transactions from "../../transactions/transactions.json";

const App = () => {
  return (
    <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;