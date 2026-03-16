import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCampsite = ({
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
        d="M13.129 3.51a1 1 0 0 1 1.743.98l-1.724 3.066 6.724 11.954a1 1 0 1 1-1.743.98L12 9.595 5.872 20.49a1 1 0 1 1-1.743-.98l6.724-11.955L9.129 4.49a1 1 0 0 1 1.743-.98L12 5.516z"
      />
      <path
        fill={color}
        d="M13 17a1 1 0 1 0-2 0v2H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-7z"
      />
    </svg>
  );
};
export default SvgCampsite;
