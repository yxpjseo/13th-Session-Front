import useNumberStore from "../store/numberStore";

const Header = () => {
<<<<<<< HEAD
	const number = useNumberStore();
	return <h1>{number.number}기 아기사자 파이팅!</h1>;
=======
  const { number } = useNumberStore();

  return <h1>{number}기 아기사자 파이팅!</h1>;
>>>>>>> e04c3f348ddcebae7ef9c3a55557d8246888ff55
};
export default Header;
