import {Form} from 'semantic-ui-react'
import {useFormik} from 'formik'
import { useRouter } from 'next/router'
import { initialValues, validationSchema } from './RegisterForm.form'
import { Auth } from '@/api'

const authCtrl = new Auth

export default function RegisterForm() {
  const router = useRouter();

  //Inicilizando validaciones
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(formValue)
        router.push("/join/sign-in")
      } catch (error) {
        throw error
      }
    }
  })

  return ( 
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input name="email" type="text" placeholder="Correo Electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
        <Form.Input name="username" type="text" placeholder="Nombre de usuario" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>
      </Form.Group>

      <Form.Group widths='equal'>
        <Form.Input name="name" type="text" placeholder="Nombre y apellido" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name}/>
        <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
      </Form.Group>

      <Form.Button type='submit' fluid loading={formik.isSubmitting}>
        Registrarse
      </Form.Button>
    </Form>
  )
}
