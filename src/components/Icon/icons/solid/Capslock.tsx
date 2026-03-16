import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCapslock = ({
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
        d="M7 20a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12.819 3.363a1.1 1.1 0 0 0-1.638 0l-7.896 8.802c-.635.708-.132 1.834.82 1.834h2.92v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.981L19.904 14c.948-.005 1.445-1.128.812-1.834z"
      />
    </svg>
  );
};
export default SvgCapslock;
