import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPullRequestDraft = ({
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
        d="M18 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 8a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0zM18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 18a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPullRequestDraft;
