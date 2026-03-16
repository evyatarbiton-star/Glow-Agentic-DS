import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTwitter = ({
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
        d="M20 8.002V8l1.875-2.023a.48.48 0 0 0-.415-.802l-2.35.31a4 4 0 0 0-6.823 4.007c-2.996-.07-6.204-.663-7.826-3.877-.2-.397-.776-.42-.904.006C2.383 9.541 4.449 14.635 9 16c-1.136 1.11-4.054 1.411-6.442 1.193-.465-.043-.757.487-.397.784C4.163 19.637 6.94 20 9.5 20 16 20 20.499 14.501 20 8.002"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTwitter;
