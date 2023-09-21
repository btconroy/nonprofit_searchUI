import npSearchLogo from '../assets/nonprofit-search.svg'
import ContentInfo from './ContentInfo'
import './ContentInfo.css'
import './Layout.css'

export default function Layout(props) {

    return (
        <>
            <div id="nps-background-cover"></div>
            <img className="logo" src={npSearchLogo} alt="Nonprofit search logo" />
            {props.children}
            <ContentInfo />
        </>
    )
}