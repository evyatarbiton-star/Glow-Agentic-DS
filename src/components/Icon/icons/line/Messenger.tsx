import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMessenger = ({
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
        d="M6 17.332v2.21l2.217-.462.584.255A8 8 0 0 0 12 20a8 8 0 1 0-8-8c0 1.803.594 3.462 1.598 4.799zm2 3.836A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.251.744 4.329 2 6v2.77a1 1 0 0 0 1.203.98z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m9.456 9.778-2.751 3.93a.426.426 0 0 0 .586.598l2.172-1.448a1 1 0 0 1 1.084-.016l2.648 1.655a1 1 0 0 0 1.35-.274l2.75-3.93a.426.426 0 0 0-.586-.6l-2.172 1.449a1 1 0 0 1-1.085.016l-2.647-1.655a1 1 0 0 0-1.35.275"
      />
    </svg>
  );
};
export default SvgMessenger;
