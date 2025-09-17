import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const buttonClass =
    "px-2.5 py-1 text-lg font-pretendard border-none bg-gray-200 text-black";

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-300 gap-8 font-[Pretendard]">
      <div className="w-[60vw] h-[40vh] rounded-2xl overflow-hidden bg-white flex flex-col justify-center items-center gap-4">
        <div>안녕하세요 아기사자 여러분🦁</div>
        <div>이 페이지는 tailwind CSS로 작성되었어요</div>
        <div>이런 방안도 있다~ 차원에서 봐주시면 됩니당</div>
        <div>마지막 세션도 아자아자 파이팅</div>
        <div>다들 즐거운 추석 연휴 보내세요🍂</div>
      </div>

      <div className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white">
        <button className={buttonClass} onClick={() => navigate("/query")}>
          react query
        </button>
        <button className={buttonClass} onClick={() => navigate("/infinity")}>
          무한 스크롤
        </button>
      </div>
    </div>
  );
};

export default MainPage;
