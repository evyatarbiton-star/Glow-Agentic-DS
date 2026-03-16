import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTube = ({
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
        d="M8 19a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.004 2a2 2 0 0 0-1.972 2.332l.042.251A.5.5 0 0 0 4.568 5h14.87a.5.5 0 0 0 .494-.417l.042-.25A2 2 0 0 0 18.002 2zm13.42 5.583A.5.5 0 0 0 18.93 7H5.073a.5.5 0 0 0-.493.583l1.138 6.75A2 2 0 0 0 7.69 16h8.62a2 2 0 0 0 1.971-1.666z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTube;
