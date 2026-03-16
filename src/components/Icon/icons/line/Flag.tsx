import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFlag = ({
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
        d="M11 4h6.491c1.986 0 3.179 2.202 2.095 3.865L18.194 10l1.392 2.135C20.67 13.797 19.476 16 17.49 16H14a3 3 0 0 1-3-3zm2 2v7a1 1 0 0 0 1 1h3.491a.5.5 0 0 0 .42-.773l-1.393-2.135a2 2 0 0 1 0-2.184l1.392-2.135A.5.5 0 0 0 17.491 6z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 4v8h5V5a1 1 0 0 0-1-1zM5 2a1 1 0 0 0-1 1v11h9V5a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path fill={color} d="M4 3a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0z" />
    </svg>
  );
};
export default SvgFlag;
