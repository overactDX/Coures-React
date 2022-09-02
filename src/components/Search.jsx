import React from "react";
import './Search.css'

const search = (props) => {
  const { value, onValueChang } = props;
  return (
    <form>
      <div className="input">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหารูปแบบ"
          value={value}
          onChange={(event) => {
            onValueChang(event.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default search;
