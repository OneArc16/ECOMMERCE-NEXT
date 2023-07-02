import styles from './Footer.module.scss'
import Link from 'next/link'
import { Container, Image, Button } from 'semantic-ui-react'

export function Footer() {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <Image src="images/logo.png" alt="Gaming"/>
                    </Link>
                </div>

                <div>
                    <ul>
                        <Link as={Link} href='#'>Terminos y Condiciones</Link>
                        <Link as={Link} href='#'>Politica de privacidad</Link>
                        <Link as={Link} href='#'>Contacto</Link>
                        <Link as={Link} href='#'>FAQs</Link>
                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as="a" href="#" circular color='facebook' icon="facebook" />
                    <Button as="a" href="#" circular color='twitter' icon="twitter" />
                    <Button as="a" href="#" circular color='linkedin' icon="linkedin" />
                    <Button as="a" href="#" circular color='instagram' icon="instagram" />
                </div>
            </div>

            <div className={styles.copyrigth}>
                <span>Copyright (c) 2023 Daniel Castaño All Rights Reserved</span>
            </div>
        </Container> 
    </div>
  )
}
