import { useAuth } from "../utils/context";

export default function Users() {
  const { user } = useAuth();

  return (
    <>
      {`Hola ${user.fullname}, bienvenido`}
    </>
  )
}
