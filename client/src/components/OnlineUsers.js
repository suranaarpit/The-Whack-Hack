import React from "react";

/**
 * @author
 * @function OnlineUsers
 **/

const OnlineUsers = (props) => {
  const { onUserSelect, users, username, checkUnseenMessages } = props;

  return (
    <div>
      <div className="online-users-header">
        <div style={{ margin: "0 10px" }}>Online Users</div>
      </div>
      <ul className="users-list">
        {users &&
          Object.keys(users).map((user, index) => (
            <>
              {user !== username ? (
                <li key={user} onClick={() => onUserSelect(user)}>
                  <span style={{ textTransform: "capitalize" }}>{user}</span>
                  <span className="new-message-count">5</span>
                </li>
              ) : null}
            </>
          ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
