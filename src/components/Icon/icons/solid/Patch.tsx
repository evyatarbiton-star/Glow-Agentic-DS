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
        d="M11.45 18.864c.19.19.19.497 0 .686a4.95 4.95 0 1 1-7-7c.19-.19.496-.19.686 0zM12.853 17.44a.5.5 0 0 0 .707 0l3.88-3.88a.5.5 0 0 0 0-.707l-6.294-6.292a.5.5 0 0 0-.707 0l-3.878 3.878a.5.5 0 0 0 0 .707zM19.55 11.45a.485.485 0 0 1-.686 0L12.55 5.136a.485.485 0 0 1 0-.686 4.95 4.95 0 0 1 7 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPatch;
