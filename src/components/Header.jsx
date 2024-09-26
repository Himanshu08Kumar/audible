import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [data, setData] = useState();
  return (
    <div className="header">
      <ul className="header-list">
        <li>Home</li>
        <li>
          Browse
        </li>
        <li>About Membership</li>
      </ul>
      <span>
        <input
          type="text"
          value={data}
          onInput={(e) => setData(e.target.value)}
          placeholder="Search for a great book"
        />
        <CiSearch />
      </span>
    </div>
  );
};

export default Header;
