import "./style.css";
import { useEffect, useState } from "react";

export default function Notify({ listUsers, text }) {
  const [showNotify, setShowNotify] = useState(false);

  useEffect(() => {
    if (listUsers.length) {
      setShowNotify(true);
      setTimeout(() => {
        setShowNotify(false);
      }, 1000);
    }
    return;
  }, [listUsers]);

  return (
    <>
      {showNotify && (
        <div className="container-notify">
          <div className="notify">
            <h2>{text}</h2>
          </div>
        </div>
      )}
    </>
  );
}
