import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FiLogIn } from "react-icons/fi";
import { DivHome } from "./style";

function Home() {
  const history = useHistory();
  function toLogin() {
    history.push("/registration");
  }
  return (
    <>
      <DivHome>
        <h2 onClick={toLogin}>Clique aqui!</h2>
        <FiLogIn onClick={toLogin}></FiLogIn>
      </DivHome>
    </>
  );
}

export default Home;
