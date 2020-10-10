import React, { useState } from "react";
const number = Math.floor(Math.random() * 100 + 1);
const ch = [];
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    ch.push(number);
  } else {
    ch.push(Math.floor(Math.random() * 100 + 1));
  }
}
const Input = () => {
  const [guess, setGuess] = useState();
  const [random, setRandom] = useState(number);
  const [choices, setChoices] = useState(ch);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (event) => {
    setGuess(event.target.value);
    setAttempts(attempts + 1);
  };
  //   const attemp = () => {
  //     setAttempts(attempts + 1);
  //   };

  const reset = () => {
    setRandom(Math.floor(Math.random() * 100 + 1));
    const newChoices = [];
    console.log(random);
    for (let i = 0; i < 5; i++) {
      if (i == 2) {
        newChoices.push(random);
      } else {
        newChoices.push(Math.floor(Math.random() * 100 + 1));
      }
    }
    setChoices(newChoices);
    setAttempts(0);
    console.log(random);
  };

  const help = choices.map((num) => {
    return (
      <div>
        <p>{num}</p>
      </div>
    );
  });
  return (
    <div className="text-center">
      {/* <br /> */}
      <h1>
        <i>GUESSING GAME</i>
      </h1>
      <br />
      <br />
      <div className="row">
        <p className="col-md-4"></p>
        <h3 className="text-center col-md-4">
          {" "}
          <i>Guess number:</i>{" "}
        </h3>
        <h6 className="col-md-4">
          <b>Attempts numbers: </b> {attempts}
        </h6>
      </div>

      <div className="text-center ">
        <div className="row">
          <p className="col-md-5"></p>
          <input
            type="number"
            min="1"
            max="100"
            className="form-control col-md-2"
            onChange={handleChange}
            placeholder="           1-100"
          />
        </div>

        {guess > random ? <p> too strong</p> : <p></p>}
        {guess < random ? <p> too weak</p> : <p></p>}
        {guess == random ? <p>Correct Answer</p> : <p>{console.log(random)}</p>}

        <p>
          <b>
            <i>For help:</i>{" "}
          </b>
          <p>{help}</p>
        </p>
        <div className="row">
          <p className="col-md-5"></p>
          <button
            className="btn btn-danger btn-block col-md-2 "
            onClick={reset}
          >
            <b>
              <i> RESET </i>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
