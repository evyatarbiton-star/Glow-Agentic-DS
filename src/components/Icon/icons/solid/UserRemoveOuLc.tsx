import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserRemoveOuLc = ({
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
        d="M15 14c.218 0 .293.277.126.418A5.99 5.99 0 0 0 13 19v2.5a.5.5 0 0 1-.5.5H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.293 16.293a1 1 0 0 1 1.414 0L19 17.586l1.293-1.293a1 1 0 0 1 1.414 1.414L20.414 19l1.293 1.293a1 1 0 0 1-1.414 1.414L19 20.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 19l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserRemoveOuLc;
