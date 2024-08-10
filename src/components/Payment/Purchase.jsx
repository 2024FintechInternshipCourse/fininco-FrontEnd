import React, { useEffect, useState } from "react";

const Purchase = () => {
  const [userAgent, setUserAgent] = useState(null);
  const [messageFromAndroid, setMessageFromAndroid] = useState(
    "Hello Vite + React!"
  );

  useEffect(() => {
    const eventFromAndroid = async (event) => {
      setMessageFromAndroid(event.detail.data);
    };

    window.addEventListener("javascriptFunction", eventFromAndroid);

    if (window.android) {
      window.android.showToastMessage("Hello Native Callback");
      window.android.callJavaScriptFunction();
    }

    return () => {
      window.removeEventListener("javascriptFunction", eventFromAndroid);
    };
  }, []);

  return (
    <div>
      <p>{messageFromAndroid}</p>
    </div>
  );
};

export default Purchase;
