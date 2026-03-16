import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBath = ({
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
        d="M3 9a1 1 0 0 0 0 2h.22l1.052 4.213a5 5 0 0 0 1.116 2.112l-.358 1.433a1 1 0 1 0 1.94.485l.164-.655a5 5 0 0 0 1.99.412h5.753c.701 0 1.376-.146 1.99-.412l.163.654a1 1 0 1 0 1.94-.485l-.358-1.433a5 5 0 0 0 1.116-2.111L20.78 11H21a1 1 0 1 0 0-2H3m13.963 7.156c.393-.38.684-.87.824-1.428L18.72 11H5.281l.932 3.728c.14.559.431 1.048.824 1.428a1 1 0 0 1 .227.198 3 3 0 0 0 1.86.646h5.753c.694 0 1.343-.238 1.86-.646a1 1 0 0 1 .226-.198M7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m13 3h-9.95a2.5 2.5 0 0 1 4.226-1.26A3 3 0 0 1 20 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBath;
