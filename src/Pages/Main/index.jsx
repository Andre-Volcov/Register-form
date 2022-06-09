import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { StyledSuccess } from "./style";
import { FiArrowLeft } from "react-icons/fi";

function Main({ SetIsLogged }) {
  const params = useParams();

  return (
    <StyledSuccess>
      <p>Parabéns {params.nome} você logou corretamente!!!</p>
      <Link to={"/"} onClick={() => SetIsLogged(false)}>
        <FiArrowLeft /> Voltar ao menu <FiArrowLeft />
      </Link>
    </StyledSuccess>
  );
}

export default Main;
