import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedAreaDown = ({
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
        d="M22 16.72v-2.107l-7.131-2.377a3 3 0 0 0-1.676-.065l-2.87.718a1 1 0 0 1-.56-.022L2 10.28v2.108l7.131 2.377a3 3 0 0 0 1.677.065l2.87-.718a1 1 0 0 1 .558.022z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 7.002a1 1 0 0 1 1.565-.825l3.128 2.14a3 3 0 0 0 2.422.435l2.348-.587a1 1 0 0 1 .739.102l5.294 3.025a1 1 0 0 1 .504.869V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.694-2.476C4.704 3.164 2 4.59 2 7.002V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.84a3 3 0 0 0-1.512-2.604L15.194 6.53a3 3 0 0 0-2.216-.305l-2.348.587a1 1 0 0 1-.807-.145z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStackedAreaDown;
