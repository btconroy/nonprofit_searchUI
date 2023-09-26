import './ContentInfo.css'
import propublicaLogo from '../assets/propublica-logo.svg'

export default function ContentInfo() {
    return (
        <div id="propublica-info__container">

            <a href="https://projects.propublica.org/nonprofits/api" target="_blank" rel="noreferrer">
                <img src={propublicaLogo} alt="ProPublica Logo" />
                <p>Powered by ProPublica&apos;s Nonprofit Explorer API</p>
            </a>
            <hr />
            <a href="https://www.pexels.com/@matthiaszomer/" target="_blank" rel="noreferrer">
                <p>Background Image by Matthias Zomer</p>
            </a>

        </div>
    )
}