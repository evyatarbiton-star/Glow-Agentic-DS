import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEraser = ({
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
      <path fill={color} d="M9 19h11a1 1 0 1 1 0 2H9z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.069 4.174a4 4 0 0 0-5.657 0l-8.238 8.239a4 4 0 0 0 .091 5.746l2.164 2.03A3 3 0 0 0 8.482 21h.69a3 3 0 0 0 2.121-.879l8.533-8.532a4 4 0 0 0 0-5.657zm-4.243 1.414a2 2 0 0 1 2.829 0l1.757 1.758a2 2 0 0 1 0 2.828L15 13.586 10.415 9zM9 10.414l-3.412 3.413a2 2 0 0 0 .046 2.873l2.163 2.03a1 1 0 0 0 .685.27h.69a1 1 0 0 0 .707-.293L13.586 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEraser;
