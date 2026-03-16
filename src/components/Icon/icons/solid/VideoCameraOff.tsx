import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVideoCameraOff = ({
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
        d="M4.143 4.143a2.3 2.3 0 0 0-.505.184 3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.27-.531.317-1.198.325-2.364z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 5a1 1 0 0 1 1-1h2a4 4 0 0 1 3.99 3.708l.963-.899C18.871 5.02 22 6.38 22 9.002v6.588a1 1 0 1 1-2 0V9.002c0-.874-1.043-1.327-1.682-.73l-2.636 2.459A1 1 0 0 1 14 10V8a2 2 0 0 0-2-2h-2a1 1 0 0 1-1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVideoCameraOff;
