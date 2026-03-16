import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeavyRain = ({
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
        d="M6.895 16.447a1 1 0 0 0-1.79-.894l-1 2a1 1 0 1 0 1.79.894zM10.895 16.447a1 1 0 1 0-1.79-.894l-2 4a1 1 0 1 0 1.79.894zM18.447 15.106a1 1 0 0 1 .448 1.341l-1.5 3a1 1 0 1 1-1.79-.894l1.5-3a1 1 0 0 1 1.342-.447M14.895 16.447a1 1 0 1 0-1.79-.894l-2.5 5a1 1 0 1 0 1.79.894z"
      />
    </svg>
  );
};
export default SvgHeavyRain;
