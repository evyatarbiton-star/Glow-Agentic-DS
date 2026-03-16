import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigUp = ({
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
        d="M12 13a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h14a1 1 0 0 0 .707-1.707z"
      />
    </svg>
  );
};
export default SvgArrowBigUp;
