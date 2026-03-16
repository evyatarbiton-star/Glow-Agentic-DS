import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEject = ({
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
        d="M4 21a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM3.363 13.857C2.44 15.183 3.389 17 5.004 17h13.991c1.616 0 2.565-1.817 1.642-3.143L13.699 3.89a2.07 2.07 0 0 0-3.398 0z"
      />
    </svg>
  );
};
export default SvgEject;
