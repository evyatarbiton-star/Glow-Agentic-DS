import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSnowAndRain = ({
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
        d="M4 9.5A3.5 3.5 0 0 0 7.5 13h8a4.5 4.5 0 1 0-.48-8.975 5.001 5.001 0 0 0-8.973 2.29A3.5 3.5 0 0 0 4 9.5"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.447 15.106a1 1 0 0 1 .448 1.341l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447M18.447 15.106a1 1 0 0 1 .448 1.341l-1 2a1 1 0 1 1-1.79-.894l1-2a1 1 0 0 1 1.342-.447M13.395 19.447a1 1 0 1 0-1.79-.894l-1 2a1 1 0 1 0 1.79.894z"
      />
    </svg>
  );
};
export default SvgSnowAndRain;
