/**
 * @author
 * @function CreateUser
 **/

const CreateUser = (props) => {
  const { onCreateUser, value, onChange } = props;

  return (
    <div className="username-container">
      <form onSubmit={onCreateUser} style={{ display: "inline-block" }}>
        <h4 className="username-label">Enter Your Name</h4>
        <input className="input" value={value} onChange={onChange} required />
      </form>
    </div>
  );
};

export default CreateUser;
