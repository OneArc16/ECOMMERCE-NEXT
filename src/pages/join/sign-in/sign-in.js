import styles from './sign-in.module.scss'
import JoinLayout from '@/layouts/JoinLayout/JoinLayout'

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Iniciar Sesion</h3>
      </div>
    </JoinLayout>
    </>
  )
}
