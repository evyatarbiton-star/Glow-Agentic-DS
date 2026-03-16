import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTriangle = ({
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
        d="M12.894 5.557a1 1 0 0 0-1.789 0L5.11 17.553A1 1 0 0 0 6.005 19h11.99a1 1 0 0 0 .894-1.447zm-3.578-.894c1.105-2.212 4.262-2.212 5.367 0l5.995 11.996c.997 1.995-.454 4.341-2.684 4.341H6.004c-2.229 0-3.68-2.346-2.683-4.341z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTriangle;
