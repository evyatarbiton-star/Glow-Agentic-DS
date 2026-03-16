import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPill = ({
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
        d="M19.472 4.537a5.236 5.236 0 0 0-7.405 0l-7.53 7.53a5.236 5.236 0 1 0 7.405 7.405l7.53-7.53a5.236 5.236 0 0 0 0-7.405m-5.99 1.415a3.236 3.236 0 1 1 4.575 4.575L15 13.585 10.424 9.01zm-4.473 4.472-3.057 3.058a3.236 3.236 0 1 0 4.575 4.575L13.585 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPill;
