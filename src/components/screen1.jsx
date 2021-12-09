import { useRef, useState, useContext } from "react";
import { MyContext } from "../context";

const Screen1 = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      // form is valid...add player
      setError([false, ""]);
      context.addPlayer(value);
      textInput.current.value = "";
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Sorry, you need to add something"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need 3 char at least"]);
      return false;
    }
    return true;
  };

  console.log(context);

  return (
    <div>
      <input
        type="text"
        placeholder="Add player name"
        name="player"
        ref={textInput}
      />

      <ul className="list-group">
        {context.state.players.map((item, idx) => (
          <li
            key={idx}
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          >
            {item}
            <span
              className="badge badge-danger"
              onClick={() => context.removePlayer(idx)}
            >
              x
            </span>
          </li>
        ))}
      </ul>

      <button className="miami" onClick={handleSubmit}>
        Add a Player
      </button>

      <div
        className="action_button animate__animated animate__fadeIn"
        onClick={() => context.next()}
      >
        NEXT
      </div>
    </div>
  );
};

export default Screen1;
