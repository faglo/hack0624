import { FC } from 'react'
import {NavbarProps, NavbarLink} from './Navbar.d'
import styles from './Navbar.module.scss'
import { Link, useLocation } from 'wouter'
import logo from '@/assets/logo.svg'
import { MdOutlineNotificationsNone, MdCalendarMonth } from 'react-icons/md'
import profilePic from '@/assets/images/image-1.png'


const NavItems = (props: {
  links: NavbarLink[]
}) => (
  <div className={styles.navLinks}>
    {props.links.map((link, index) => (
      <Link href={link.url} key={index}>
      <a
        style={link.style}
        key={index}
        className={styles.navLink}
        href={link.url}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
      </Link>
    ))}
  </div>
)


const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <MdCalendarMonth
        className={styles.iconButton}
        size={28}
      />
      <MdOutlineNotificationsNone
        className={styles.iconButton}
        size={28}
      />
    </div>
  )
}

const Profile = (props: {
  name: string,
  city: string,
  profilePicture: string
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.city}>{props.city}</span>
      </div>
      <img
        src={props.profilePicture}
        alt="profile"
        className={styles.profilePicture}
      />
    </div>
  )
}

export const Navbar: FC<NavbarProps> = ({
  children,
  links
}) => {
  const [location, setLocation] = useLocation()
  if (location.includes('wine/confirm')) return <>{children}</>
  return (
    <div className={styles.root}>
      <div className={styles.rootGrid}>
        <div className={styles.header}>
          <Buttons />
          <img src={logo as string} alt="logo" />
          <Profile 
            name="Мария Иванова"
            city="Краснодар"
            profilePicture={profilePic as string}
          />
        </div>  
        <div className={styles.containerGrid}>
          <div className={styles.nav}>
            <NavItems links={links} />
          </div>
          <div className={styles.container}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}