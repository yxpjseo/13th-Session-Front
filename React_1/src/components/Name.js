import React from "react";

const Name = ({ name, nth, isFE }) => {
  return (
    <>
      {isFE ? (
        <div>
          {nth}기 프론트엔드 {name}입니다.
        </div>
      ) : null}
    </>
  );
};
export default Name;
