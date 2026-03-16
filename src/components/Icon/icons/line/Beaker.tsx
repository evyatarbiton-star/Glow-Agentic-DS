import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBeaker = ({
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
        d="M16.001 7H8a1 1 0 0 0 0 2v2.429a1 1 0 0 1-.151.528l-3.396 5.458C3.21 19.413 4.647 22 7 22h9.993c2.353 0 3.79-2.584 2.549-4.583l-3.392-5.46a1 1 0 0 1-.15-.528V9a1 1 0 1 0 0-2m-6 4.429V9h4v2.43a3 3 0 0 0 .452 1.582L15.687 15H8.312l1.236-1.986a3 3 0 0 0 .453-1.585M7.068 17l-.916 1.472A1 1 0 0 0 7 20h9.993a1 1 0 0 0 .85-1.528L16.929 17zM14 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBeaker;
