import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgElectricalPlug = ({
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
        d="M19 17.5a1.5 1.5 0 0 0-1.5-1.5H8A5 5 0 0 1 8 6h3v2H8a3 3 0 0 0 0 6h9.5a3.5 3.5 0 1 1 0 7H4a1 1 0 1 1 0-2h13.5a1.5 1.5 0 0 0 1.5-1.5"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M20 4h-4v2h4a1 1 0 1 0 0-2M20 8h-4v2h4a1 1 0 1 0 0-2"
      />
      <path
        fill={color}
        d="M9 7a4 4 0 0 1 4-4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a4 4 0 0 1-4-4"
      />
    </svg>
  );
};
export default SvgElectricalPlug;
