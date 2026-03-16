import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgNext = ({
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
        d="M19 4a1 1 0 1 1 2 0v16a1 1 0 1 1-2 0zM6.143 3.363C4.817 2.44 3 3.39 3 5.005v13.99c0 1.616 1.817 2.565 3.143 1.642l9.967-6.938a2.07 2.07 0 0 0 0-3.398z"
      />
    </svg>
  );
};
export default SvgNext;
