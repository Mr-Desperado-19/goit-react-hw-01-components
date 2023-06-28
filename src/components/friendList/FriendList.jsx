import PropTypes from "prop-types";
import "./FriendList.scss"

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <span className={`status ${isOnline ? "online" : "offline"}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
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