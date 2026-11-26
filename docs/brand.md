# Valien brand

| Name        | Hex       | RGB           | Used for                                  |
| ----------- | --------- | ------------- | ----------------------------------------- |
| Black       | `#000000` | 0, 0, 0       | Primary buttons, headings, strong accents |
| Mint Green  | `#96FFB0` | 150, 255, 176 | Highlights, badges, icons on dark, glows  |
| Bright Gray | `#EFEFEF` | 239, 239, 239 | Neutral surfaces and gradients            |

Lighter mint tints (`--color-mint-50`, `--color-mint-100`) are used for the soft background
glows and tinted cards. All tokens live in `src/styles/tokens.css`.

## Logo

Vector files are in `src/assets/images/brand/` and use `currentColor`, so the color is set in CSS:

- `logo.svg` – mark + "valien" wordmark
- `logo-mark.svg` – mark only

Approved combinations (from the brand sheet):

- Black logo on white / bright gray
- Black logo on mint
- Mint logo on black

Render them with `<Logo />` (`src/components/ui/Logo.jsx`).
