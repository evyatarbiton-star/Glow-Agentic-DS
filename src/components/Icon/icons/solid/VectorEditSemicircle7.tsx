import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSemicircle7 = ({
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
        d="M17.501 16.03c.274-.033.499-.254.499-.53v-7c0-.276-.225-.497-.499-.53a4 4 0 0 1-3.47-3.471C13.997 4.225 13.776 4 13.5 4H12a8 8 0 1 0 0 16h1.5c.276 0 .497-.225.53-.499a4 4 0 0 1 3.471-3.47M16 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSemicircle7;
