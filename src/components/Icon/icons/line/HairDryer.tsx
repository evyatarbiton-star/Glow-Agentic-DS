import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHairDryer = ({
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
        d="m3.934 13.683.778 4.672a3.165 3.165 0 0 0 6.288-.52v-3.307l-2 .303v3.004a1.166 1.166 0 0 1-2.315.191l-.532-3.195a5.5 5.5 0 0 1-2.22-1.148"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.326 4.06a5.5 5.5 0 1 0-.003 10.873l11.127-1.687A3 3 0 0 0 22 10.28V8.72a3 3 0 0 0-2.549-2.966zM4 9.496a3.5 3.5 0 0 1 4.026-3.459L16 7.251v4.496l-7.976 1.209A3.5 3.5 0 0 1 4 9.496m14 1.947 1.15-.174a1 1 0 0 0 .85-.989V8.72a1 1 0 0 0-.85-.989L18 7.555z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHairDryer;
