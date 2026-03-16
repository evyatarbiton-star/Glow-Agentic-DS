import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFastBackward = ({
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
        d="M20.997 4a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0zM13.855 3.363c1.326-.923 3.142.026 3.142 1.642v13.99c0 1.616-1.816 2.565-3.142 1.642L3.887 13.7a2.07 2.07 0 0 1 0-3.398z"
      />
    </svg>
  );
};
export default SvgFastBackward;
