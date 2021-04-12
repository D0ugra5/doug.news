import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {signIn, useSession, signOut} from 'next-auth/client'
export function SingInButton(){
  
    const [session] = useSession();
    console.log(session)
    return session ? (
        <button
        type="button"
        className={styles.signinButton}
        onClick={()=>signOut()}
        >
            <FaGithub color="#84d361"/>
           {session.user.name}
           <FiX color="#131313" className={styles.closedIcon} />
        </button>
  ):(
    <button
        type="button"
        className={styles.signinButton}
        onClick={()=> signIn('facebook')}
        >
            <FaGithub color="#eba417"/>
            Sing on with Github
        </button>
  )


    
    
}