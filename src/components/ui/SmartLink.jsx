import { Link } from 'react-router-dom';

const isExternal = (to) => /^(https?:|mailto:|tel:)/.test(to);

/**
 * One link component for every kind of destination:
 * - internal routes ("/contact") and home sections ("/#pricing") use the router
 * - external URLs, mailto: and tel: render a plain <a>
 */
export default function SmartLink({ to, children, ...props }) {
  if (isExternal(to)) {
    const newTab = to.startsWith('http');
    return (
      <a href={to} {...(newTab && { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
