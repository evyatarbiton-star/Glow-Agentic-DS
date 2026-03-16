import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFaceSad = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8.203 7.104A1 1 0 0 1 7.4 16.8a1.01 1.01 0 0 1-.199-1.401q.05-.066.102-.128.089-.107.248-.276a7 7 0 0 1 .923-.804c.798-.58 2-1.191 3.526-1.191s2.728.61 3.526 1.191a7 7 0 0 1 1.17 1.08l.104.129a1 1 0 0 1-1.597 1.204l-.005-.006-.033-.041a4.945 4.945 0 0 0-.815-.748c-.578-.42-1.376-.81-2.35-.81s-1.772.39-2.35.81a5 5 0 0 0-.815.748l-.034.041z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFaceSad;
