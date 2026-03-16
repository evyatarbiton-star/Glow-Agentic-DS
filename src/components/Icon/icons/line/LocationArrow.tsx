import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationArrow = ({
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
        d="M17.58 3.173c2.03-.766 4.014 1.218 3.248 3.248l-4.774 12.643c-1.018 2.697-4.883 2.546-5.687-.222l-1.02-3.507a1 1 0 0 0-.681-.682l-3.507-1.019c-2.768-.805-2.92-4.67-.222-5.687zm1.377 2.541a.52.52 0 0 0-.67-.67L5.643 9.818c-.899.34-.849 1.627.074 1.896l3.507 1.019a3 3 0 0 1 2.043 2.043l1.02 3.508c.268.922 1.556.972 1.896.074z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationArrow;
