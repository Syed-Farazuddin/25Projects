import React, { useState } from "react";
import { FaQrcode } from "react-icons/fa";
import QRCode from "react-qr-code";
function Project6() {
  const [name, setName] = useState("");
  const [qrcode, setQrCode] = useState("");
  function handleDisable() {
    return name && name.trim() !== "" ? false : true;
  }
  return (
    <div className="h-[100vh] bg-black text-white flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold text-white mb-10">
        Project 6: QR code Generator
      </h1>
      <div
        className={`w-1/2 h-auto p-6 flex justify-center items-center flex-col gap-4 bg-white text-black`}
      >
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            className="border-2 border-slate-400 outline-none text-black p-2 rounded-lg"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            disabled={handleDisable()}
            // disabled
            className={`${
              handleDisable() ? "opacity-50" : ""
            } flex items-center  justify-center p-2 bg-blue-600 rounded-lg text-white font-bold hover:bg-orange-500 hover:text-black hover:font-extrabold`}
            onClick={() => {
              setQrCode(name);
            }}
          >
            <p className="mr-1">Generate QR CODE</p>
            <FaQrcode />
          </button>
        </div>
        <div>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "auto", width: "auto" }}
            value={qrcode}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  );
}

export default Project6;
