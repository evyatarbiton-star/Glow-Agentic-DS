import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTableTennis = ({
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
        d="M6 9a5 5 0 0 1 7.15-4.516 3.5 3.5 0 0 1 1.115-1.678A7 7 0 1 0 8 15.326V19a3 3 0 1 0 6 0v-3.674a7 7 0 0 0 3.992-6.66A3.5 3.5 0 0 1 16 8.966V9q0 .514-.1 1H6.1A5 5 0 0 1 6 9m5 5a5 5 0 0 1-4-2h8a5 5 0 0 1-4 2m1 1.93a7 7 0 0 1-2 0V19a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTableTennis;
