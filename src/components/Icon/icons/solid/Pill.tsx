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
        d="M13.93 16.05a.5.5 0 0 0 0-.707l-5.273-5.272a.5.5 0 0 0-.707 0L4.24 13.78a4.228 4.228 0 1 0 5.98 5.98zM15.343 13.929a.5.5 0 0 0 .707 0l3.71-3.71a4.228 4.228 0 0 0-5.98-5.98l-3.71 3.71a.5.5 0 0 0 0 .707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPill;
