import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCamera = ({
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
        d="M7.83 4.106A2 2 0 0 1 9.617 3h4.764a2 2 0 0 1 1.789 1.106l.447.894H18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1.382zM14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCamera;
