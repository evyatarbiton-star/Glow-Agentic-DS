import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPullRequestClosed = ({
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
        d="M7 8a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0zM19 11a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.293 3.293a1 1 0 0 1 1.414 0L18 4.586l1.293-1.293a1 1 0 1 1 1.414 1.414L19.414 6l1.293 1.293a1 1 0 0 1-1.414 1.414L18 7.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L16.586 6l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
};
export default SvgPullRequestClosed;
