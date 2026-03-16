import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgController = ({
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
        d="M2.668 7.637A4 4 0 0 1 6.652 4h10.697a4 4 0 0 1 3.983 3.637l.648 7.1a4.824 4.824 0 0 1-7.85 4.18C13.514 18.415 12.794 18 12 18s-1.514.415-2.13.917a4.824 4.824 0 0 1-7.85-4.18zM7 9a1 1 0 0 1 2 0v1h1a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1zm10 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgController;
