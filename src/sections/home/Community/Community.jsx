import { ArrowUpRight } from '@phosphor-icons/react';
import { community } from '@/data/community';
import { socialLinks } from '@/config/site';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import SectionGlow from '@/components/ui/SectionGlow';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Community.module.css';

export default function Community() {
  const { badge, title, description, channels } = community;

  return (
    <section id="community" className="section">
      <SectionGlow variant="left" />
      <div className="container">
        <div className={styles.header}>
          <SectionHeading align="start" badge={badge} title={title} description={description} />
          <span className={styles.line} aria-hidden="true" />
        </div>

        <ul className={styles.channels}>
          {channels.map((channel) => (
            <li key={channel.name}>
              <Card
                as="a"
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                interactive
                className={styles.channel}
              >
                <ArrowUpRight size={20} className={styles.arrow} aria-hidden="true" />
                <h3 className={styles.name}>
                  {channel.logo ? (
                    <img src={channel.logo} alt="" width="32" height="32" />
                  ) : (
                    <span className={styles.iconLogo}>
                      <Icon name={channel.icon} size={20} />
                    </span>
                  )}
                  {channel.name}
                </h3>
                <p>{channel.text}</p>
                <ul className={styles.tags}>
                  {channel.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>

        <div className={styles.socials}>
          <span>Socials :</span>
          <ul>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
