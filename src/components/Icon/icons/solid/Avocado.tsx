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
        d="M12 2c2.855 0 5.3 2.1 5.704 4.925.16 1.126.703 2.151 1.264 3.141a8 8 0 1 1-13.935 0c.56-.99 1.103-2.015 1.263-3.14C6.7 4.098 9.146 2 12 2m0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAvocado;
