import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPatch = ({
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
        d="M12.067 4.537a5.236 5.236 0 1 1 7.405 7.405l-7.53 7.53a5.236 5.236 0 0 1-7.405-7.405zm5.99 1.415a3.24 3.24 0 0 0-4.09-.4l4.49 4.49a3.24 3.24 0 0 0-.4-4.09M6.924 12.509l5.585-5.585 4.576 4.575-5.586 5.586zm-1.372 1.457a3.237 3.237 0 0 0 4.49 4.49z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPatch;
