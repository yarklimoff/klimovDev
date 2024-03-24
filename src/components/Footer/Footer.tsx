import './Footer.css';
import { ReactComponent as VKIcon } from '../../images/icons/vk.svg';
import { ReactComponent as GitHubIcon } from '../../images/icons/gitHub.svg';
import { ReactComponent as TelegramIcon } from '../../images/icons/telegram.svg';

export default function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <div className={'footer__wrapper'}>
          <ul className={'social'}>
            <li className={'social__item'}>
              <a href="https://t.me/yarklimov">
                <TelegramIcon></TelegramIcon>
              </a>
            </li>
            <li className={'social__item'}>
              <a href="https://github.com/yarklimoff">
                <GitHubIcon></GitHubIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
