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
        d="M7 2a3 3 0 0 0-3 3v14.697a2.303 2.303 0 0 0 4.219 1.278l3.02-4.53A1 1 0 0 1 12.07 16h3.297a3 3 0 0 0 2.94-2.4l1.633-8A3 3 0 0 0 17 2zM6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 .98 1.2L17.408 8H12a1 1 0 1 0 0 2h5l-.653 3.2a1 1 0 0 1-.98.8H12.07a3 3 0 0 0-2.496 1.336l-3.02 4.53A.303.303 0 0 1 6 19.696z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFoursquare;
