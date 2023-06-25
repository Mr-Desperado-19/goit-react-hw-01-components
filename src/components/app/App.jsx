import Profile from "../profile";
import Statistics from "../statistics";
import FriendList from "../friendList";
import TransactionHistory from "../transactionHistory";

import user from "/user.json";

const App = () => {
  return (
    <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics />
        <FriendList />
        <TransactionHistory />
    </div>
  );
};

export default App;