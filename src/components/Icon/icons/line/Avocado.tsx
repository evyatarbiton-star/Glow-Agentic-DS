import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAvocado = ({
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
        d="M6.773 11.051a6 6 0 1 0 10.454 0c-.552-.975-1.283-2.3-1.503-3.843C15.462 5.378 13.87 4 12 4S8.538 5.378 8.276 7.208c-.22 1.544-.951 2.868-1.503 3.843M12 2c2.855 0 5.3 2.1 5.704 4.925.16 1.126.703 2.151 1.264 3.141a8 8 0 1 1-13.935 0c.56-.99 1.103-2.015 1.263-3.14C6.7 4.098 9.146 2 12 2"
        clipRule="evenodd"
      />
      <path fill={color} d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </svg>
  );
};
export default SvgAvocado;
