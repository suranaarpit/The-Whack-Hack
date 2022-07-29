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
  const { sendMessage, value, onChange } = props;
  return (
    <div>
      <div
        className="messageBox-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ margin: "0 10px" }}>Arpit</div>
        <div
          style={{
            margin: "0 10px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Connect on Whiteboard
        </div>
      </div>
      <div className="message-area">
        <ul>
          <li>
            <div className="user-pic">
              <img src={userPic} alt="img" />
            </div>
            <div className="message-text">Your Message</div>
          </li>
        </ul>
      </div>
      <form onSubmit={sendMessage} className="message-control">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="Enter your message here...!"
        />
        <div className="file-input-container">
          <input type="file" id="hidden-file" />
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
  );
};

export default MessagesControl;
