import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStrikethrough = ({
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
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zM5 12a1 1 0 0 1 1-1h2.72a3.781 3.781 0 0 1 3.062-6H12a4 4 0 0 1 3.822 2.818C16.018 8.45 15.462 9 14.8 9c-.442 0-.785-.372-.957-.779A2 2 0 0 0 12 7h-.219a1.781 1.781 0 0 0-.796 3.374l1.251.626H18a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m10.805 3c.106 0 .194.083.195.189v.03A3.78 3.78 0 0 1 12.219 19H12a4 4 0 0 1-3.822-2.818C7.982 15.55 8.538 15 9.2 15c.442 0 .785.372.957.779A2 2 0 0 0 12 17h.219c.984 0 1.781-.797 1.781-1.781 0-.117.09-.219.206-.219z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStrikethrough;
