import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrush = ({
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
        d="M8.607 11.758a2 2 0 0 1 2.98-.174l.83.827a2 2 0 0 1-.171 2.985L5.6 20.655A1.604 1.604 0 0 1 3.347 18.4zM12 4.94c0-.86.551-1.626 1.399-1.772C15.04 2.885 17.76 2.76 19.5 4.5s1.615 4.46 1.332 6.101C20.686 11.45 19.92 12 19.06 12h-3.232a2 2 0 0 1-1.414-.586l-1.828-1.828A2 2 0 0 1 12 8.172z"
      />
    </svg>
  );
};
export default SvgBrush;
