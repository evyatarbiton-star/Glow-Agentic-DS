import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShift = ({
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
        d="M12 5.232 5.658 12H8a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1h2.343zm-1.094-1.757a1.5 1.5 0 0 1 2.189 0l7.496 8c.898.957.218 2.525-1.095 2.525H17v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4H4.504c-1.313 0-1.992-1.568-1.095-2.526z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShift;
