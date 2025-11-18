import React, { useRef, useState } from "react";
import "./otpLogin.css";

function OtpLogin() {
  const [OTP, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handelOtp = (value, index, keyPress) => {
    // Only allow single digit or empty
    if (!/^[0-9]?$/.test(value)) return;
    let arr = [...OTP];
    arr[index] = value;
    setOTP(arr);

    // Auto-focus next input on entry
    if ((keyPress === 'Enter' || keyPress === undefined) && value && index < OTP.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    // Auto-focus previous input on backspace if current is empty
    if (keyPress === 'Backspace' && !value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const checkArr = () => {
    return OTP.every((e) => e !== "");
  };

  return (
    <div className="otpMain">
      <div className="wrapper">
        {OTP.map((e, index) => (
          <div key={index} className="otpBox">
            <input
              type="text"
              maxLength={1}
              ref={inputRefs[index]}
              value={OTP[index]}
              onChange={ev => handelOtp(ev.target.value, index)}
              onKeyDown={ev => {
                if (ev.key === "Enter") {
                  handelOtp(ev.target.value, index, "Enter");
                }
                if (ev.key === "Backspace") {
                  handelOtp(ev.target.value, index, "Backspace");
                }
              }}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
        ))}
        <button className="submitBtn" disabled={!checkArr()}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default OtpLogin;
