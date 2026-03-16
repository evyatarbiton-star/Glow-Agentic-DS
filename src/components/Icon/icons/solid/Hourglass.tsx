import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHourglass = ({
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
        d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.485a2 2 0 0 1-.837 1.628L13.72 12l5.443 3.887A2 2 0 0 1 20 17.515V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.485a2 2 0 0 1 .838-1.628L10.28 12 4.838 8.113A2 2 0 0 1 4 6.485zm11.577 16c.234 0 .423-.19.423-.423a1 1 0 0 0-.5-.866L13 17.267a2 2 0 0 0-2 0l-2.5 1.444a1 1 0 0 0-.5.866c0 .233.19.423.423.423z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHourglass;
