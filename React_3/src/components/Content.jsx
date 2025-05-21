import useNumberStore from "../store/numberStore";

const Content = () => {
  const { number, increase, decrease, reset } = useNumberStore();

  return (
    <>
      <div className="contents">
        <p>설정할 기수: {number}기</p>
        <div className="btnBox">
          <button onClick={decrease}>-1</button>
          <button onClick={increase}>+1</button>
          <button onClick={reset}>초기화</button>
        </div>
      </div>
    </>
  );
};

export default Content;
