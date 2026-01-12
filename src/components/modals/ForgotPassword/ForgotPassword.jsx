import { Fragment, useState } from "react";
import GetOPT from "./GetOPT";
import ForgotFields from "./ForgotFields";
const ForgotPassword = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [order, setOrder] = useState({});
  const [mobile, setMobile] = useState();

  return (
    <Fragment>
      {showForgotPassword ? (
        <ForgotFields mobile={mobile} order={order} />
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

export default ForgotPassword;
