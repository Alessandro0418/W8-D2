import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <>
      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant} className="text-center ">
          Welcome to EpiBooks
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
