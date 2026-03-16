import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine5 = ({
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
        d="M13 5a3 3 0 0 0-3 3c0 1.338.212 1.973.443 2.667l.006.017c.266.8.551 1.665.551 3.316a1 1 0 1 1-2 0c0-1.338-.212-1.973-.443-2.667l-.006-.017C8.285 10.516 8 9.651 8 8a5 5 0 0 1 10 0c0 2.269-.861 3.96-1.622 5.354l-.125.228C15.523 14.916 15 15.874 15 17a2 2 0 1 0 4 0 1 1 0 1 1 2 0 4 4 0 0 1-8 0c0-1.662.772-3.062 1.445-4.281l.177-.323C15.362 11.041 16 9.731 16 8a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine5;
