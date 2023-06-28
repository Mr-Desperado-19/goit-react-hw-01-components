import PropTypes from "prop-types";
import "./FriendList.scss"

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="friend-list_item">
          <span className={`status ${isOnline ? "online" : "offline"}`}></span>
          <img className="friend-list_avatar" src={avatar} alt="User avatar" width="48" height="48" />
          <p className="friend-list_name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;