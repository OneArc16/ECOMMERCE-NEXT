import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import styles from './sign-up.module.scss'
import Link from 'next/link'
import RegisterForm from '@/components/Auth/RegisterForm/RegisterForm'

export default function SignUpPage() {
  return (
    <>
    <JoinLayout>
    <div className={styles.signIn}>
      <h3>Crear cuenta</h3>
      <RegisterForm />

      <div className={styles.actions}>
        <Link href='/join/sign-in'>Atras</Link>
      </div>
    </div>
    </JoinLayout>
    </>
  )
}
