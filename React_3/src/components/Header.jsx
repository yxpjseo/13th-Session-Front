import useNumberStore from "../store/numberStore";

const Header = () => {
  const { number } = useNumberStore();

  return <h1>{number}기 아기사자 파이팅!</h1>;
};
export default Header;
