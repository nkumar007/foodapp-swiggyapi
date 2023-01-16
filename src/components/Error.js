import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <div
        className="error-container h-[90vh] flex
        justify-center items-center text-4xl font-bold text-black"
      >
        <h2>{`${status} : ${statusText}`}</h2>
      </div>
    </>
  );
};

export default Error;
