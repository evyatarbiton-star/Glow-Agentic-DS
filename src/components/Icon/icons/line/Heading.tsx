import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading = ({
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
        d="M14 10a1 1 0 1 0 0 2h2v8a1 1 0 1 0 2 0v-8h2a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        d="M4 3a1 1 0 0 0 0 2h4v15a1 1 0 1 0 2 0V5h4a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default SvgHeading;
