import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHatChef = ({
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
        d="M7 5c.493 0 .965.09 1.401.252a4 4 0 0 1 7.198 0A4 4 0 0 1 19 12.465V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5.535A4 4 0 0 1 7 5m0 7.465a2 2 0 0 0-.999-1.731A2 2 0 0 1 7.7 7.126a2 2 0 0 0 2.5-.999 2 2 0 0 1 3.6 0 2 2 0 0 0 2.5.999 2 2 0 0 1 1.699 3.608 2 2 0 0 0-.999 1.73V15H7zM7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHatChef;
