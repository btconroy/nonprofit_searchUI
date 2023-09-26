import npSearchLogo from '../assets/nonprofit-search.svg'
import ContentInfo from './ContentInfo'
import { Link } from 'react-router-dom'
import './ContentInfo.css'
import './Layout.css'

export default function Layout(props) {

    return (
        <>
            <div id="nps-background-cover"></div>
            <Link to='/'><img className="logo" src={npSearchLogo} alt="Nonprofit search logo" /></Link>
            {props.children}
            <ContentInfo />
        </>
    )
}