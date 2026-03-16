import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEdit6 = ({
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
        d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M17.95 2.877a3 3 0 0 0-4.242 0L5.885 10.7a1.5 1.5 0 0 0-.384.659L4.043 16.6a1.1 1.1 0 0 0 1.355 1.355l5.243-1.458a1.5 1.5 0 0 0 .659-.384l7.822-7.823a3 3 0 0 0 0-4.243z"
      />
    </svg>
  );
};
export default SvgEdit6;
