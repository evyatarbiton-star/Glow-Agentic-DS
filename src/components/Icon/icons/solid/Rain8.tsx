import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRain8 = ({
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
        d="M9 20a2 2 0 0 0 2-2c0-1.129-1.133-2.342-1.694-2.873a.44.44 0 0 0-.612 0C8.134 15.657 7 16.87 7 18a2 2 0 0 0 2 2M15 22a2 2 0 0 0 2-2c0-1.129-1.133-2.342-1.694-2.873a.44.44 0 0 0-.612 0C14.134 17.657 13 18.87 13 20a2 2 0 0 0 2 2"
      />
    </svg>
  );
};
export default SvgRain8;
