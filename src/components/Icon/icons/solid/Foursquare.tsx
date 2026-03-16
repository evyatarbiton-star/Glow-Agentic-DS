import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFoursquare = ({
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
        d="M4 19.957V4a2 2 0 0 1 2-2h12.003a2 2 0 0 1 1.972 2.334l-.55 3.25a.5.5 0 0 1-.493.416H13a1 1 0 1 0 0 2h5.424a.5.5 0 0 1 .493.584l-.635 3.75A2 2 0 0 1 16.31 16h-3.373a2 2 0 0 0-1.537.72l-3.787 4.545A2.043 2.043 0 0 1 4 19.957"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFoursquare;
