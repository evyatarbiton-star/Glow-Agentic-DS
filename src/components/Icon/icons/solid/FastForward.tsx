import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFastForward = ({
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
        d="M10.143 3.363C8.817 2.44 7 3.39 7 5.005v13.99c0 1.616 1.817 2.565 3.143 1.642L20.11 13.7a2.07 2.07 0 0 0 0-3.398zM3 4a1 1 0 0 1 2 0v16a1 1 0 1 1-2 0z"
      />
    </svg>
  );
};
export default SvgFastForward;
