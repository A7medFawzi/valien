import {
  AddressBook,
  ArrowUpRight,
  Browser,
  Buildings,
  Calculator,
  ChartBar,
  ChatCircleText,
  Check,
  ClipboardText,
  Cloud,
  Code,
  CreditCard,
  Database,
  DeviceMobile,
  Layout,
  Package,
  PaintBrush,
  Palette,
  PenNib,
  PlugsConnected,
  Pulse,
  RocketLaunch,
  ShoppingCart,
  SquaresFour,
  Stack,
  Swatches,
  TextAa,
  Truck,
} from '@phosphor-icons/react';

/**
 * Icon registry: maps short, content-friendly names (used in src/data) to Phosphor icons,
 * so data files never import icon components directly.
 */
export const icons = {
  accounting: Calculator,
  api: PlugsConnected,
  arrow: ArrowUpRight,
  brush: PaintBrush,
  browser: Browser,
  cart: ShoppingCart,
  check: Check,
  cloud: Cloud,
  code: Code,
  crm: AddressBook,
  dashboard: ChartBar,
  database: Database,
  design: Layout,
  designSystem: SquaresFour,
  erp: Buildings,
  inventory: Package,
  layout: Layout,
  messaging: ChatCircleText,
  mobile: DeviceMobile,
  monitor: Pulse,
  palette: Palette,
  payments: CreditCard,
  pen: PenNib,
  plan: ClipboardText,
  rocket: RocketLaunch,
  shipping: Truck,
  stack: Stack,
  swatches: Swatches,
  typography: TextAa,
};

/** Returns the icon component for a registry name (undefined if unknown). */
export function getIcon(name) {
  const Component = icons[name];
  if (!Component && import.meta.env.DEV) console.warn(`Unknown icon "${name}"`);
  return Component;
}
