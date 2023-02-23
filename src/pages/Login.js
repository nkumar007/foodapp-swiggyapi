import { useNavigate } from "react-router-dom";

const details = {
  username: "nkwinner",
  email: "nkg@google.com",
};
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    navigate("/", { replace: true });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-[100vw] h-[100vh] bg-red-200"
    >
      <div className="flex flex-col items-center justify-center gap-2 w-[450px] h-[40%]  bg-blue-400 p-4 rounded-lg">
        <span className="text-center text-white font-medium text-3xl">
          Welcome to FoodVilla
        </span>
        <label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="p-2 m-2 outline outline-none text-xl rounded-md"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-2 m-2 outline outline-none text-xl rounded-md"
          />
        </label>
        <button
          type="submit"
          className="p-2 text-lg text-white font-medium bg-blue-800 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
