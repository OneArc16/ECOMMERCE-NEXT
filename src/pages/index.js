import { Button } from "semantic-ui-react"
import { useAuth } from "@/hooks"

export default function index() {
  const {user, logout, updateUser} = useAuth();

  return (
    <div>
      <h2>Games Shop</h2>

      <Button primary>
        Ir al login
      </Button>
      
      {user ? (
        <div>
          <p>Sesion Iniciada, Hola {user.firstname} {user.lastname}</p>
          <Button onClick={logout}>Cerrar Sesion</Button>
        </div>
      ) : <div>
        <a href="/join/sign-in">
          Iniciar Sesion
        </a>
        </div>}
    </div>
  )
}
