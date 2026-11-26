import { icons } from './icons';

/** Renders an icon from the registry in ./icons.js by its short name. */
export default function Icon({ name, size = 20, weight = 'regular', ...props }) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component size={size} weight={weight} aria-hidden="true" {...props} />;
}
