import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://surya.in" className="logo">
        <span>surya</span>
        {/* <span>singh.in</span> */}
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="www.linkedin.com/in/jaya-surya-m-n-510s"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/JAYASURYA510"
          target="_blank"
          rel="noopener"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919025903441&text=Hello+Surya"
          target="_blank"
          rel="noopener"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/SuryaN"
          target="_blank"
          rel="noopener"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a 
          href="https://www.instagram.com/surya_the_forgiver.in"
          target="_blank"
          rel="noopener"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
