import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
export function SingInButton(){
    const isUserLoggedIn = true 
    return isUserLoggedIn ? (
        <button
        type="button"
        className={styles.signinButton}
        >
            <FaGithub color="#84d361"/>
           Douglinhas Douglas
           <FiX color="#737380" className={styles.closedIcon} />
        </button>
  ):(
    <button
        type="button"
        className={styles.signinButton}
        >
            <FaGithub color="#eba417"/>
            Sing on with Github
        </button>
  )


    
    
}