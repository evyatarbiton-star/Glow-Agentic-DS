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
        d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5zM20.975 16.5c.028-.276-.199-.5-.475-.5h-17c-.276 0-.503.224-.475.5A5 5 0 0 0 8 21h8a5 5 0 0 0 4.975-4.5M9 3a1 1 0 0 1 1 1c0 1.227-.327 1.89-.606 2.447l-.008.016C9.17 6.9 9 7.236 9 8a1 1 0 0 1-2 0c0-1.227.327-1.89.606-2.447l.008-.016C7.83 5.1 8 4.764 8 4a1 1 0 0 1 1-1M13 3a1 1 0 0 1 1 1c0 1.227-.327 1.89-.606 2.447l-.008.016C13.17 6.9 13 7.236 13 8a1 1 0 1 1-2 0c0-1.227.327-1.89.606-2.447l.008-.016C11.83 5.1 12 4.764 12 4a1 1 0 0 1 1-1M18 4a1 1 0 1 0-2 0c0 .764-.169 1.101-.386 1.537l-.008.016C15.327 6.109 15 6.773 15 8a1 1 0 1 0 2 0c0-.764.169-1.101.387-1.537l.007-.016C17.673 5.891 18 5.227 18 4"
      />
    </svg>
  );
};
export default SvgSoup;
