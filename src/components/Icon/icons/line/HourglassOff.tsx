import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHourglassOff = ({
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
        d="m11.016 11.474-5.76 4.114A3 3 0 0 0 4 18.029V19a3 3 0 0 0 3 3h10a3 3 0 0 0 2.872-2.128L18 18v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-.97a1 1 0 0 1 .419-.815l6.161-4.4c4.66 3.994-17.15-14.7-1.564-1.341M8 3a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v.97a3 3 0 0 1-1.256 2.442L16.58 9.957a1 1 0 1 1-1.162-1.628l2.162-1.545A1 1 0 0 0 18 5.972V5a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHourglassOff;
