import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHandCart = ({
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
        d="M20.676 4.263a1 1 0 0 1 .061 1.413l-1.744 1.903 1.714 1.714a1 1 0 0 1-1.414 1.414L17.64 9.054l-7.903 8.622-1.474-1.352 11-12a1 1 0 0 1 1.413-.061m-17.383 9.03a1 1 0 0 1 1.414 0l3 3-1.414 1.414-3-3a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m4.584 10.414 2.001 2.002a2 2 0 0 0 2.829 0l4.001-4.002a2 2 0 0 0 0-2.828l-2.001-2.002a2 2 0 0 0-2.829 0L4.584 7.586a2 2 0 0 0 0 2.828M11 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
export default SvgHandCart;
