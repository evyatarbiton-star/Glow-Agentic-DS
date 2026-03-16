import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLightning = ({
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
        d="m12.225 13-.496 4.646L16.947 11h-5.172l.495-4.634L7.063 13zm2.404-9.886c.107-.998-1.16-1.514-1.78-.723l-8.63 10.992A1 1 0 0 0 5.007 15H10l-.63 5.897c-.107.999 1.16 1.514 1.78.724l8.64-11.003A1 1 0 0 0 19.003 9H14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLightning;
