import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgScissors = ({
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
        d="M5.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M21.503 20h-2.014a7 7 0 0 1-4.95-2.05l-3.123-3.124L13.242 13h1.375a1 1 0 0 1 .668.255l6.552 5.873a.5.5 0 0 1-.334.872"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19.49 4h2.013a.5.5 0 0 1 .334.872l-6.552 5.873a1 1 0 0 1-.668.255h-2.203L8.58 14.835a3.5 3.5 0 1 1-1.414-1.414l5.128-5.128.002.002L14.54 6.05A7 7 0 0 1 19.49 4M5.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScissors;
