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
        d="M4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.412 3.174a4 4 0 0 1 5.657 0l.757.758a4 4 0 0 1 0 5.657l-6.906 6.906a2 2 0 0 1-1.015.545l-4.503.918a2 2 0 0 1-2.36-2.359l.918-4.504a2 2 0 0 1 .546-1.014zm4.242 1.415a2 2 0 0 0-2.828 0L13.414 5 17 8.586l.412-.412a2 2 0 0 0 0-2.828zM8.414 10 12 6.415 15.586 10 12 13.586zM7 11.415l-.08.08-.918 4.504 4.504-.918.08-.08z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEdit;
