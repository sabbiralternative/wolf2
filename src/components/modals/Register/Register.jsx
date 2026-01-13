import { Fragment, useState } from "react";
import GetOPT from "./GetOPT";
import RegisterFields from "./RegisterFields";
const Register = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [order, setOrder] = useState({});
  const [mobile, setMobile] = useState();

  return (
    <Fragment>
      {showForgotPassword ? (
        <RegisterFields mobile={mobile} order={order} />
      ) : (
        <GetOPT
          mobile={mobile}
          setMobile={setMobile}
          setOrder={setOrder}
          setShowForgotPassword={setShowForgotPassword}
        />
      )}
    </Fragment>
  );
};

export default Register;
