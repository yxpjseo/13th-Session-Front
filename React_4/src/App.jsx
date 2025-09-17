import axios from "axios";

function App() {
  // POST 예제 (CREATE)
  const onPost = () => {
    axios({
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      method: "post",
      url: "https://reqres.in/api/users",
      data: {
        name: "morpheus",
        job: "leader",
      },
    })
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // GET 예제 (1) (LIST USERS)
  const getFirst = () => {
    axios({
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      method: "get",
      url: "https://reqres.in/api/users?page=2",
    })
      .then((response) => {
        console.log(response.data.data);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // GET 예제 (2) (SINGLE USER)
  const getSecond = () => {
    axios({
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      method: "get",
      url: "https://reqres.in/api/users/2",
    })
      .then((response) => {
        console.log(response.data.data.last_name);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // GET 예제 (3) (SINGLE USER NOT FOUND)
  const getThird = () => {
    axios({
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      method: "get",
      url: "https://reqres.in/api/users/23",
    })
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  return (
    <>
      <h1>POST</h1>
      {/* POST 예제 */}
      <h3 onClick={onPost}>예제</h3>
      {/* GET */}
      <h1>GET</h1>
      <h3 onClick={getFirst}>예제 1</h3>
      {/* GET 예제 2번 */}
      <h3 onClick={getSecond}>예제 2</h3>
      {/* GET 예제 3번 */}
      <h3 onClick={getThird}>예제 3</h3>
    </>
  );
}

export default App;
