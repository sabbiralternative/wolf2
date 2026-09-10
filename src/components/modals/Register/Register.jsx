import { Fragment, useState } from "react";
import GetOPT from "./GetOPT";
import RegisterFields from "./RegisterFields";
import { Settings } from "../../../api";
const Register = () => {
  const [tab, setTab] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );
  const [username, setUsername] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [order, setOrder] = useState({});
  const [mobile, setMobile] = useState();

  return (
    <Fragment>
      {showForgotPassword ? (
        <RegisterFields
          mobile={mobile}
          order={order}
          tab={tab}
          setUsername={setUsername}
          username={username}
        />
      ) : (
        <GetOPT
          mobile={mobile}
          setMobile={setMobile}
          setOrder={setOrder}
          setShowForgotPassword={setShowForgotPassword}
          tab={tab}
          setTab={setTab}
          setUsername={setUsername}
          username={username}
        />
      )}
    </Fragment>
  );
};

export default Register;
