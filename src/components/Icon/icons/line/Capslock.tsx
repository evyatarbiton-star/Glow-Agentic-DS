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
        d="M7 20a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M12 5.232 5.658 12H8a1 1 0 0 1 1 1v2h6v-2a1 1 0 0 1 1-1h2.343zm-1.094-1.757a1.5 1.5 0 0 1 2.189 0l7.496 8c.898.957.218 2.525-1.095 2.525H17v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1H4.504c-1.313 0-1.992-1.568-1.095-2.526z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCapslock;
