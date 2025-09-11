import useNumberStore from "../store/numberStore";

const Content = () => {
<<<<<<< HEAD
	const number = useNumberStore();
	return (
		<>
			<div className="contents">
				<p>설정할 기수: {number.number}기</p>
				<div className="btnBox">
					<button onClick={number.decrease}>-1</button>
					<button onClick={number.increase}>+1</button>
					<button onClick={number.reset}>초기화</button>
				</div>
			</div>
		</>
	);
=======
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
>>>>>>> e04c3f348ddcebae7ef9c3a55557d8246888ff55
};

export default Content;
