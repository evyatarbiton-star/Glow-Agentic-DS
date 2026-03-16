import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPetriDish = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.293 7.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414-1.414zm-8 3a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8-4.5a1 1 0 1 0-2 0v.5a1 1 0 0 1-1 1 3 3 0 0 0-3 3v.5a1 1 0 1 0 2 0V16a1 1 0 0 1 1-1 3 3 0 0 0 3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPetriDish;
