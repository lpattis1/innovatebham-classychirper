import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      username: "",
      post: "",
      chirps: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        chirps: [
          ...this.state.chirps,
          {
            id: uuidv4(),
            username: "Commander_Shepard",
            post: "I'm Commander Shepard and this is my favorite chirp on the Citadel.",
          },
          { id: uuidv4(), username: "Liara_Tsoni", post: "By ThE gOdDeSs! 🗣" },
          {
            id: uuidv4(),
            username: "Garrus_Vakarian",
            post: "Can this chirp wait a bit? I'm in the middle of some calibrations...",
          },
        ],
      });
    }, 2000);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      chirps: [
        ...this.state.chirps,
        { id: uuidv4(), username: this.state.username, post: this.state.post },
      ],
    });
  }

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center text-center mt-5 mb-4">
        <h3 className="chirp-title mb-3">Enter your chirp...</h3>
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control chirp-username"
              id="exampleFormControlInput1"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Your Message"
              onChange={(e) => this.setState({ post: e.target.value })}
            />
            <button
              className="btn btn-primary mt-3"
              onClick={(e) => this.handleSubmit(e)}
            >
              Post Chirp
            </button>
          </div>
        </div>

        <section className="row mt-5">
          <div className="col-12">
            <ul className="list-group">
              {this.state.chirps.map((chirp) => (
                <li
                  className="list-group-item p-3 mt-3"
                  key={`chirp-task-${chirp.id}`}
                >
                  <h5>{chirp.username}:</h5> {chirp.post}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
