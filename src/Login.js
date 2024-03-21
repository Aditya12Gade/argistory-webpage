import React,{useState} from 'react'


export default function Login() {
    const [text, setText] = useState("");
  return (
    <>
    <div style={{ display: "inline" }}>
        <p style={{ fontSize: "25px", textAlign: "center", marginTop: "50px" }}>
          Login / Register to yourargistory.in
        </p>
        <p style={{ fontSize: "15px", textAlign: "center", marginTop: "10px" }}>
          Haven't Register Yet ?
          <p style={{ color: "teal", display: "inline" }}>
            {" "}
            please register here.
          </p>
        </p>
      </div>

      <div className="middlelogin">
        <div className="mid">
          <p>
            <b>Email / Mobile no.</b>
          </p>
          <input
            style={{ width: "100%" }}
            value={text}
            placeholder="Enter Email / Mobile NO."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <p>
            <b>Password</b>
          </p>
          <input
            style={{ width: "100%", marginBottom: "5px" }}
            value={text}
            placeholder="Enter Email / Mobile NO."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button
          style={{
            width: "27.6%",
            marginLeft: "8px",
            backgroundColor: "teal",
            borderColor: "teal",
            color: "white",
          }}
        >
          Login
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: "10px" }}>
        By proceding ahead you expressly agree to the Your ArgiStory{" "}
        <a style={{ color: "teal", marginLeft: "6px" }}>
          {" "}
          terms and conditions
        </a>{" "}
      </p>
      <hr style={{ width: "60% " }} />

      <p style={{ textAlign: "center" }}>
        <b>FOLLOW US ON SOCIAL MEDIA</b>
      </p>
    </>
  )
}
