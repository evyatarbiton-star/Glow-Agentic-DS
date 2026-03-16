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
        d="M5.567 17.433a5.364 5.364 0 0 1 0-7.586l4.14-4.14a1 1 0 1 0-1.414-1.414l-4.14 4.14a7.364 7.364 0 0 0 10.414 10.414l5.89-5.89a5.243 5.243 0 0 0-7.414-7.414l-5.75 5.75a3.121 3.121 0 1 0 4.414 4.414l4-4a1 1 0 1 0-1.414-1.414l-4 4a1.121 1.121 0 0 1-1.586-1.586l5.75-5.75a3.243 3.243 0 0 1 4.586 4.586l-5.89 5.89a5.364 5.364 0 0 1-7.586 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAttachFile;
