import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoins6 = ({
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
        d="M5 6a3 3 0 0 1 3-3h4a3 3 0 0 1 .79 5.895c.136.342.21.715.21 1.105 0 .535-.14 1.037-.385 1.471q.287.185.525.427a5 5 0 0 0-1.38 1.452A1 1 0 0 0 11 13H7a1 1 0 1 0 0 2h4q.051 0 .101-.005-.1.487-.101 1.005c0 1.416.589 2.695 1.535 3.605A3 3 0 0 1 10 21H6a3 3 0 0 1-1.615-5.529A3 3 0 0 1 4 14c0-.535.14-1.037.385-1.471a3.001 3.001 0 0 1 .825-5.424A3 3 0 0 1 5 6m5 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zm2-2H8a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2m-2 10a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoins6;
