import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShorts = ({
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
        d="M2.997 10a.5.5 0 0 0-.498.461l-.489 6.307A3 3 0 0 0 5.001 20h2.397a3 3 0 0 0 2.97-2.576l.49-3.434a1.153 1.153 0 0 1 2.283 0l.49 3.434A3 3 0 0 0 16.602 20h2.397a3 3 0 0 0 2.991-3.232l-.489-6.307a.5.5 0 0 0-.498-.461zM5.776 4h12.447a3 3 0 0 1 2.99 2.768l.055.693a.5.5 0 0 1-.499.539H3.23a.5.5 0 0 1-.498-.539l.054-.693A3 3 0 0 1 5.775 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShorts;
