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
        d="M5.194 16.164A1 1 0 0 1 6.18 15H9a1 1 0 0 1 1 1v2.834a2.166 2.166 0 0 1-4.302.356z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.565 5.55a.5.5 0 0 0-.565.495v4.912a.5.5 0 0 0 .565.496l1.696-.223A2 2 0 0 0 22 9.247V7.755a2 2 0 0 0-1.74-1.982zM7.086 4.04a4.5 4.5 0 1 0 0 8.922l8.48-1.115a.5.5 0 0 0 .434-.496v-5.7a.5.5 0 0 0-.435-.496z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHairDryer;
