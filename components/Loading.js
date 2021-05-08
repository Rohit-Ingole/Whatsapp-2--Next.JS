import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
        alt="Loading"
        // server side CSS => inline css
        height={200}
        style={{ marginBottom: 10 }}
      />
      <Circle color="#3CBC28" size={60} />
    </center>
  );
};

export default Loading;
