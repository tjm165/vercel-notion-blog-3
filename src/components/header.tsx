import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { Analytics } from '@vercel/analytics/react'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/thomasmoawad' },
  { label: 'X (Twitter)', link: 'https://twitter.com/ThomasMoawad' },
]

const Header = ({
  titlePre = '',
  ogImageUrl = 'https://www.thomasmoawad.com/og-image.png',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Thomas Moawad</title>
        <meta name="og:description" content="Thomas Moawad Blog" />
        <meta name="description" content="Thomas Moawad Blog" />
        <meta name="og:title" content="Thomas Moawad" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@thomasmoawad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      {/* {typeof window !== 'undefined' &&
        window.location.origin === 'https://www.thomasmoawad.com' && ( */}
      <Analytics />
      {/* )} */}
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
