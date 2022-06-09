import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Form } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Registration({ SetIsLogged }) {
  const history = useHistory();

  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
  };

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome de usuário obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Utilize apenas caracteres de A-Z"),
    email: yup.string().email("Email inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Informar uma senha")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Sua senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial "
      ),
    confirmPassword: yup
      .string()
      .required("Sua senha precisa ser igual a anterior")
      .oneOf([yup.ref("password")], "Sua senha precisa ser igual a anterior"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    SetIsLogged(true);
    history.push(`/main/${data.username}`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          type="text"
          placeholder="Nome de usuário"
          {...register("username")}
        />
        {
          (errors.username?.message && toast.error(errors.username?.message),
          clearWaitingQueue())
        }

        <input type="text" placeholder="E-mail" {...register("email")} />
        {
          (errors.email?.message && toast.error(errors.email?.message),
          clearWaitingQueue())
        }

        <input type="password" placeholder="Senha" {...register("password")} />
        {
          (errors.password?.message && toast.error(errors.password?.message),
          clearWaitingQueue())
        }

        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        {
          (errors.confirmPassword?.message &&
            toast.error(errors.confirmPassword?.message),
          clearWaitingQueue())
        }

        <button type="submit">Cadastrar</button>
      </Form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        style={{ fontSize: "12px" }}
      />
    </>
  );
}

export default Registration;
