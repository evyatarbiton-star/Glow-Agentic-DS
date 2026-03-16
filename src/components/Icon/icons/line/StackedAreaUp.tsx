import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStackedAreaUp = ({
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
        d="M2 16.72v-2.107l7.131-2.377a3 3 0 0 1 1.676-.065l2.87.718a1 1 0 0 0 .56-.022L22 10.28v2.108l-7.131 2.377a3 3 0 0 1-1.677.065l-2.87-.718a1 1 0 0 0-.558.022z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 7.002a1 1 0 0 0-1.565-.825l-3.128 2.14a3 3 0 0 1-2.422.435l-2.348-.587a1 1 0 0 0-.739.102l-5.294 3.025a1 1 0 0 0-.504.869V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2.694-2.476C19.296 3.164 22 4.59 22 7.002V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.84a3 3 0 0 1 1.512-2.604L8.806 6.53a3 3 0 0 1 2.216-.305l2.348.587a1 1 0 0 0 .807-.145z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStackedAreaUp;
