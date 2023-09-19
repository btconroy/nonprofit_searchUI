import './ContentInfo.css'
import propublicaLogo from '../assets/propublica-logo.svg'

export default function ContentInfo() {
    return (
        <div id="propublica-info__container">

            <a href="https://projects.propublica.org/nonprofits/api" target="_blank">
                <img src={propublicaLogo} alt="ProPublica Logo" />
                <p>Powered by ProPublica's Nonprofit Explorer API</p>
            </a>
            <hr />
            <a href="https://www.pexels.com/@matthiaszomer/" target="_blank">
                <p>Background Image from Matthias Zomer</p>
            </a>

        </div>
    )
}