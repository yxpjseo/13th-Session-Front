import useNumberStore from "../store/numberStore";

const Content = () => {
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
};

export default Content;
