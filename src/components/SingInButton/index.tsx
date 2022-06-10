import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {signIn, useSession, signOut} from 'next-auth/client'

export function SingInButton(){
  
    const [session] = useSession();
0
    return session ? (
        <button
        type="button"
        className={styles.signinButton}
        onClick={()=>signOut()}
        >
            
    <img src={session.user.image} alt="Profile image"/>
             {session.user.name }
           <FiX color="#fff" className={styles.closedIcon} />
        </button>
  ):(
    <button
        type="button"
        className={styles.signinButton}
        onClick={()=> signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sing on with Github
        </button>
  )


    
    
}