import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner-content bg-light">
        <h1 className="display-4 mb-4">A Warm Welcome !</h1>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo
          corrupti laboriosam velit minima minus exercitationem necessitatibus
          autem, unde porro possimus natus. Inventore saepe ratione rem optio et
          aliquid animi.
        </p>
        <button type="button" class="btn btn-primary">
          Call to action!
        </button>
      </div>
    );
  }
}

export default Banner;
