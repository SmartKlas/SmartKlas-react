import React from "react";
import tick from "../../assets/SVG/tick.svg";

const Features = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-black fw-bold text-center mt-5">
        Some of our unique features
      </h1>
      <p className="text-muted dm-sans text-center col-xl-6 col-11 mx-auto mb-5">
        SmartKlas does not only help you keep track of your work, we are here to
        open your business up to the world.
      </p>

      <div className="row mb-3 gap-4">
        <div className="col-xl-5 col-md-6 col-12 bg-black rounded-9">
          <div className="card-body">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-light">My Documents</h5>
            <p className="text-super-light dm-sans">
              A personal online storage space for your own files, with no limit
              in terms of quantity.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12 bg-light rounded-9">
          <div className="card-body">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-black">intradesk</h5>
            <p className="text-super-light dm-sans">
              A personal online storage space for your own files, with no limit
              in terms of quantity.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12 bg-light rounded-9">
          <div className="card-body">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-black">Live</h5>
            <p className="text-super-light dm-sans">
              Organize online classes, meetings and parent discussions, powered
              by mysmartklas.com
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12 bg-light rounded-9 mt-3">
          <div className="card-body pb-5 px-3">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-black">Messages</h5>
            <p className="text-super-light dm-sans">
              Secure, internal communication between teachers, students and
              parents.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-12 bg-light rounded-9 mt-3">
          <div className="card-body pb-5 px-3">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-black">Online IDE</h5>
            <p className="text-super-light dm-sans">
              Experience the future of web development and build projects with
              the first cloud IDE form{" "}
              <span className="text-black fw-bold dm-sans">SmartKlas.</span>
            </p>
          </div>
        </div>

        <div className="col-xl-5 col-md-6 col-12 bg-light rounded-9 mt-3">
          <div className="card-body pb-5 px-3">
            <img src={tick} alt="tick" />

            <h5 className="dm-sans text-black">Extensions</h5>
            <p className="text-super-light dm-sans">
              Do you want to go all the way? Then expand your SmartKlas platform
              with extras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
