import {Form} from 'semantic-ui-react'

export default function RegisterForm() {
  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input name="email" type="text" placeholder="Correo Electronico" />
        <Form.Input name="username" type="text" placeholder="Nombre de usuario" />
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Input name="name" type="text" placeholder="Nombre y apellido" />
        <Form.Input name="password" type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Button type='submit' fluid>
        Registrarse
      </Form.Button>
    </Form>
  )
}
