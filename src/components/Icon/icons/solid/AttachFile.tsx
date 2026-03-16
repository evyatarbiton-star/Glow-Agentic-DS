import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAttachFile = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-4.793-9.793a1.121 1.121 0 0 0 1.586 1.586l4-4a1 1 0 1 1 1.414 1.414l-4 4a3.121 3.121 0 1 1-4.414-4.414l4-4a5.243 5.243 0 0 1 7.414 7.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a3.243 3.243 0 0 0-4.586-4.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAttachFile;
