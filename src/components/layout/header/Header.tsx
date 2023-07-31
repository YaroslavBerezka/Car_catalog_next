import Link from 'next/link'
import {FC} from 'react'
import styles from './Header.module.scss'
import {usePathname} from 'next/navigation'

const Header: FC = () => {
    const pathname = usePathname()

    return (
        <div className={styles.header}>
            <Link href='/' className={pathname === '/' ? styles.active : ''}>
                Home
            </Link>
            <Link href='/about' className={pathname === '/about' ? styles.active : ''}>
                About Page
            </Link>
        </div>
    )
}

export default Header