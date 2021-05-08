import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <ClimbingBoxLoader color="#36D7B7" css={override} size={40} />
    </center>
  );
};

export default Loading;
