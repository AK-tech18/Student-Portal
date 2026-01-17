import { useEffect, useState } from "react";

export default function Topbar() {
  const [userName, setUserName] = useState("Student");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className="topbar">
      <input className="search" placeholder="Search here..." />
      <div className="profile">{userName}</div>
    </div>
  );
}
