import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSoup = ({
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
        d="M3 14a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6zm3-1h12a1 1 0 0 1 1 1v1H5v-1a1 1 0 0 1 1-1m-.465 4A4 4 0 0 0 9 19h6c1.48 0 2.773-.804 3.465-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 3a1 1 0 0 1 1 1c0 1.227-.327 1.89-.606 2.447l-.008.016C9.17 6.9 9 7.236 9 8a1 1 0 0 1-2 0c0-1.227.327-1.89.606-2.447l.008-.016C7.83 5.1 8 4.764 8 4a1 1 0 0 1 1-1M13 3a1 1 0 0 1 1 1c0 1.227-.327 1.89-.606 2.447l-.008.016C13.17 6.9 13 7.236 13 8a1 1 0 1 1-2 0c0-1.227.327-1.89.606-2.447l.008-.016C11.83 5.1 12 4.764 12 4a1 1 0 0 1 1-1M18 4a1 1 0 1 0-2 0c0 .764-.169 1.101-.386 1.537l-.008.016C15.327 6.109 15 6.773 15 8a1 1 0 1 0 2 0c0-.764.169-1.101.387-1.537l.007-.016C17.673 5.891 18 5.227 18 4"
      />
    </svg>
  );
};
export default SvgSoup;
