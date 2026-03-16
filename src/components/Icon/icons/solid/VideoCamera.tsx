import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVideoCamera = ({
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
        d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C16 6.28 16 7.12 16 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C13.72 20 12.88 20 11.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2zM18 10.366a1 1 0 0 1 .236-.646l2-2.364C20.839 6.644 22 7.07 22 8V16c0 .932-1.162 1.357-1.764.646l-2-2.365a1 1 0 0 1-.236-.646z"
      />
    </svg>
  );
};
export default SvgVideoCamera;
