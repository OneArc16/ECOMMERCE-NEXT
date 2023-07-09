import styles from './ChangeEmailForm.module.scss'
import { Form } from 'semantic-ui-react'

export function ChangeEmailForm(){
    return (
        <Form className={styles.form}>
            <label>Cmabiar correo electronico</label>

            <Form.Input name="email" placeholder="Nuevo correo electronico" />
            <Form.Input name="repeatEmail" placeholder="Repetir correo electronico" />

            <Form.Button type="submit">Enviar</Form.Button>

        </Form>
    )
}