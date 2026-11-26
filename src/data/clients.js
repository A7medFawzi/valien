import mrPriceLogo from '@/assets/images/clients/mr-price.svg';
import alOwaydanLogo from '@/assets/images/clients/al-owaydan.webp';

export const trustedBy = {
  text: 'Trusted by businesses across industries.',
};

/**
 * Client logos for the "Trusted By" marquee.
 *
 * Only original logo files are used. A logo is shown on production only once permission
 * for public use is confirmed (set `pending: false`). Clients without an original logo
 * file are not listed: Alketab Academy, REEFIYA, Zirconia Lab, Multiforms, Eiffel Stores,
 * Sama Riyadh and X-Fire Safety.
 *
 * `tone: 'dark'` places a light logo on a dark tile without changing the logo itself.
 */
export const clients = [
  { name: 'Mr Price', logo: mrPriceLogo, tone: 'dark', pending: true },
  { name: 'Al-Owaydan', logo: alOwaydanLogo, pending: true },
];
