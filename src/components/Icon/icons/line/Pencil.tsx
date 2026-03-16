import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPencil = ({
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
        d="M13.411 4.174a4 4 0 0 1 5.657 0l.758.758a4 4 0 0 1 0 5.657l-8.55 8.549a4 4 0 0 1-1.797 1.036l-2.702.721c-2.229.595-4.267-1.443-3.672-3.672l.72-2.703a4 4 0 0 1 1.037-1.797zm4.243 1.414a2 2 0 0 0-2.829 0l-.91.912 3.585 3.586.911-.912a2 2 0 0 0 0-2.828zM7.914 12.5 12.5 7.914l3.586 3.586-4.586 4.586zM6.5 13.914l-.224.223a2 2 0 0 0-.518.9l-.721 2.702a1 1 0 0 0 1.224 1.224l2.703-.722a2 2 0 0 0 .898-.518l.224-.223z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPencil;
