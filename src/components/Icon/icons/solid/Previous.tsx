import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPrevious = ({
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
        d="M17.857 3.363C19.183 2.44 21 3.39 21 5.005v13.99c0 1.616-1.817 2.565-3.143 1.642L7.89 13.699a2.07 2.07 0 0 1 0-3.398zM5 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0z"
      />
    </svg>
  );
};
export default SvgPrevious;
