import styles from './sign-in.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import LoginForm from '@/components/Auth/LoginForm/LoginForm'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Iniciar Sesion</h3>
          <LoginForm />
          
        <div className={styles.actions}>
          <Link href='/join/sign-up'>¿No tienes una cuenta?</Link>
        </div>
      </div>
    </JoinLayout>
    </>
  )
}
