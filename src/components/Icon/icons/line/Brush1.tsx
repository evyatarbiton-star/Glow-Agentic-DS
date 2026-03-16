import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrush1 = ({
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
        d="M8 6.586 17.414 16l-2.293 2.293a3 3 0 0 1-4.242 0l-.247-.247-.999 1.412a3.653 3.653 0 1 1-5.091-5.091l1.412-.999-.247-.247a3 3 0 0 1 0-4.242zm0 2.828-.879.879a1 1 0 0 0 0 1.414l.667.666a1.5 1.5 0 0 1-.195 2.286l-1.896 1.34A1.653 1.653 0 1 0 8 18.304l1.341-1.896a1.5 1.5 0 0 1 2.286-.195l.666.667a1 1 0 0 0 1.414 0l.879-.879z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.412 4.174a4 4 0 0 1 5.656 0l3.758 3.758a4 4 0 0 1 0 5.656L16 17.414 6.586 8zm4.242 1.415a2 2 0 0 0-2.828 0L9.414 8 16 14.586l2.412-2.412a2 2 0 0 0 0-2.828z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBrush1;
