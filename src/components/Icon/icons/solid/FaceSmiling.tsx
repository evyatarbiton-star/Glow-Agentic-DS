import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFaceSmiling = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8.203 3.896A1 1 0 0 0 7.2 14.6l.001.001.001.002.003.004.007.009.021.027.07.086q.089.107.248.276c.213.22.522.512.923.804.798.58 2 1.191 3.526 1.191s2.728-.61 3.526-1.191a7 7 0 0 0 1.17-1.08c.03-.035.044-.052.07-.086l.008-.01.026-.033a1 1 0 0 0-1.597-1.204l-.005.006-.033.041a4.946 4.946 0 0 1-.815.748c-.578.42-1.376.81-2.35.81s-1.772-.39-2.35-.81a5 5 0 0 1-.815-.748l-.034-.041z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFaceSmiling;
