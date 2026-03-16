import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVolumeMute = ({
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
        d="M17.707 9.293a1 1 0 1 0-1.414 1.414L17.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L19 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L19 10.586zM13 6.004c0-1.712-2.011-2.632-3.307-1.513L5.628 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.628l4.065 3.51c1.296 1.118 3.307.197 3.307-1.515z"
      />
    </svg>
  );
};
export default SvgVolumeMute;
