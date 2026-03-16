import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBankCards = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.218 9.092c-.14.276-.19.607-.208 1.108-.01.27-.015.405.038.516a.5.5 0 0 0 .22.227c.109.057.25.057.533.057h14.398c.283 0 .424 0 .533-.057a.5.5 0 0 0 .22-.227c.053-.11.048-.246.038-.516-.017-.501-.067-.832-.208-1.108a2 2 0 0 0-.874-.874C16.48 8 15.92 8 14.8 8H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M18 13.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C17.62 13 17.48 13 17.2 13H2.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C2 13.38 2 13.52 2 13.8v3c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 20 4.08 20 5.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 18.48 18 17.92 18 16.8z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v8a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBankCards;
