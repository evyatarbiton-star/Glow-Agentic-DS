import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEdit = ({
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
        d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M11.939 5.353a.5.5 0 0 0-.707 0l-3.879 3.88a.5.5 0 0 0 0 .706l4.707 4.707a.5.5 0 0 0 .707 0l3.879-3.878a.5.5 0 0 0 0-.707zM10.64 16.499c.165-.046.195-.249.075-.37L5.87 11.285c-.12-.12-.324-.09-.37.075l-1.457 5.243a1.1 1.1 0 0 0 1.355 1.354zM13.709 2.877a3 3 0 0 1 4.242 0l1.172 1.172a3 3 0 0 1 0 4.242l-.355.356a.5.5 0 0 1-.707 0l-4.707-4.708a.5.5 0 0 1 0-.707z"
      />
    </svg>
  );
};
export default SvgEdit;
