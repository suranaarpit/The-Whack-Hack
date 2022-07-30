import cancel from "../assets/cancel.png";
import image from "../assets/image.png";
import sendIcon from "../assets/send.png";
import attachment from "../assets/paper-clip.png";
import userPic from "../users/1.png";

/**
 * @author
 * @function MessagesControl
 **/

const MessagesControl = (props) => {
  const {
    sendMessage,
    value,
    onChange,
    groupMessage,
    sortNames,
    username,
    receiver,
    setMedia,
    onChatClose,
    media,
  } = props;

  const messages = groupMessage
    ? groupMessage[sortNames(username, receiver)]
    : [];

  return (
    <div>
      <div
        className="messageBox-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ margin: "0 10px" }}>{receiver}</div>
        <div
          style={{
            margin: "0 5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <a
            href="https://chat-app-whiteboard.herokuapp.com/"
            target={"_blank"}
          >
            Connect on Whiteboard
          </a>
        </div>
        <div>
          <img
            onClick={onChatClose}
            style={{
              margin: "0 10px",
              cursor: "pointer",
            }}
            src={cancel}
            alt="img"
            width={10}
          />
        </div>
      </div>
      <div className="message-area">
        <ul>
          {messages && messages.length > 0
            ? messages.map((msg, index) => (
                <li
                  style={{
                    flexDirection:
                      username === msg.receiver ? "row" : "row-reverse",
                  }}
                  key={index}
                >
                  <div className="user-pic">
                    <img src={userPic} alt="img" />
                  </div>
                  <div>
                    {msg.media && msg.media.image ? (
                      <div className="image-container">
                        <img src={msg.media.content} alt="img" width={200} />
                      </div>
                    ) : null}
                    {msg.message !== "" ? (
                      <div className="message-text">{msg.message}</div>
                    ) : null}
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
      <div>
        {media !== null ? (
          <div className="attachement-display">
            <img src={image} alt="img" />
            <span className="attachment-name">{media.name}</span>
            <span className="remove-attachment">x</span>
          </div>
        ) : null}

        <form onSubmit={sendMessage} className="message-control">
          <textarea
            value={value}
            onChange={onChange}
            placeholder="Enter your message here...!"
          />
          <div className="file-input-container">
            <input
              type="file"
              id="hidden-file"
              onChange={(e) => {
                const file = e.target.files[0];
                // console.log("file:", file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                  // console.log(reader.result);
                  setMedia({
                    image: true,
                    content: reader.result,
                    name: file.name,
                  });
                };
                reader.onerror = function (error) {
                  console.log(error);
                };
              }}
            />
            <label htmlFor="hidden-file">
              <img width={20} src={attachment} alt="img" />
            </label>
          </div>
          <button>
            <img src={sendIcon} alt="img" />
            <span style={{ display: "inline-block" }}>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagesControl;
