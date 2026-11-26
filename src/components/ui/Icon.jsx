import {
  AddressBook,
  ArrowUpRight,
  Browser,
  ChartBar,
  ChartLineUp,
  ChatsCircle,
  Check,
  Cloud,
  Code,
  Database,
  DribbbleLogo,
  FacebookLogo,
  FigmaLogo,
  GearSix,
  GoogleChromeLogo,
  Graph,
  Headset,
  InstagramLogo,
  Lightning,
  LinkedinLogo,
  Money,
  NotionLogo,
  OpenAiLogo,
  PaypalLogo,
  PinterestLogo,
  Robot,
  RocketLaunch,
  ScanSmiley,
  ShareNetwork,
  Smiley,
  Stack,
  UsersThree,
  XLogo,
} from '@phosphor-icons/react';

/**
 * Maps short, content-friendly names (used in src/data) to Phosphor icons,
 * so data files never import icon components directly.
 */
const icons = {
  arrow: ArrowUpRight,
  browser: Browser,
  chart: ChartBar,
  chartUp: ChartLineUp,
  chat: ChatsCircle,
  check: Check,
  chrome: GoogleChromeLogo,
  cloud: Cloud,
  code: Code,
  contacts: AddressBook,
  database: Database,
  dribbble: DribbbleLogo,
  facebook: FacebookLogo,
  figma: FigmaLogo,
  gear: GearSix,
  graph: Graph,
  headset: Headset,
  instagram: InstagramLogo,
  lightning: Lightning,
  linkedin: LinkedinLogo,
  money: Money,
  notion: NotionLogo,
  openai: OpenAiLogo,
  paypal: PaypalLogo,
  pinterest: PinterestLogo,
  robot: Robot,
  rocket: RocketLaunch,
  scan: ScanSmiley,
  share: ShareNetwork,
  smiley: Smiley,
  stack: Stack,
  users: UsersThree,
  x: XLogo,
};

export default function Icon({ name, size = 20, weight = 'regular', ...props }) {
  const Component = icons[name];
  if (!Component) {
    if (import.meta.env.DEV) console.warn(`<Icon>: unknown icon "${name}"`);
    return null;
  }
  return <Component size={size} weight={weight} aria-hidden="true" {...props} />;
}
