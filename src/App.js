import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import SignIn from "./SignIn";
import Login from "./Login";

function App() {
 const [SignUpClicked, setSignUpClicked]= useState(false);



  return (
    <div>
      <div className="header">
        <h3>your argistory </h3>
        {/* <input  
         className="input1"
          value={text}
          placeholder="search for argistrory"
          onChange={(e) => {
            setText(e.target.value);
          }}
        /> */}

        <div
          style={{ width: "30%", marginTop: "10px" }}
          class="input-group mb-3"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Search for argistory"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              style={{ backgroundColor: "teal", color: "white" }}
              class="btn btn-outline-secondary"
              type="button"
            >
              search
            </button>
          </div>
        </div>

        <div className="button">
          <button className="headerbuttons" onClick={()=>{
            setSignUpClicked(true)
          }} >
            <i class="bi bi-person-circle"></i>&nbsp;Sign in
          </button>
          <button className="headerbuttons"  
          onClick={()=>{
            setSignUpClicked(false)
          }}

          >
            <i class="bi bi-person-circle">&nbsp;log in</i>
          </button>
        </div>
      </div>

      <div className="navbar">
        <p>STARTUP STORY</p>
        <p>ARGI STARTUP FUNDING</p>
        <p>ARGI IDEAS</p>
        <p>ARGI HEROS</p>

        <p>GOVERNMENT SCHEMES</p>
        <p>CAREER</p>
        <p>CONTACT US</p>
        <p>ABOUT US</p>
      </div>
      <hr />

      {SignUpClicked? <SignIn/>:<Login/>}

      <footer>
        <div className="footer">
          <div className="link">
            <p style={{ marginTop: "15px", marginLeft: "100px" }}>
              IMPORTANT LINKS
            </p>
            <a>STARTUP STORY</a>

            <a>ARGI STARTUP FUNDING</a>
            <a>ARGI IDEAS </a>
            <a>ARGI HEROS </a>

            <a>GOVERNMENT SCHEMES</a>
            <a>CONTACT US </a>
            <a>ABOUT US </a>

            <p style={{ marginleft: "50%" }}>FOLLOW US ON SOCIAL MEDIA</p>
            <div>
              <i className="bi bi-heart"></i> {/* Heart icon */}
              <i class="bi bi-amazon"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-amazon"
                viewBox="0 0 16 16"
              >
                <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z" />
                <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623" />
              </svg>
            </div>
          </div>

          <hr />
        </div>
      </footer>
    </div>
  );
}

export default App;
