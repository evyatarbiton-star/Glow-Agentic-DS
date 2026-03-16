import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgX = ({ size = "md", color = "currentColor", ...props }: IconProps) => {
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
        d="M9.086 14.714a.5.5 0 0 0-.77-.022l-4.069 4.65a1 1 0 1 0 1.506 1.317l3.942-4.506a.5.5 0 0 0 .018-.637zM15.69 9.302a.5.5 0 0 1-.77-.022l-.627-.802a.5.5 0 0 1 .018-.637l3.936-4.5a1 1 0 0 1 1.506 1.318zM20.9 20.192 7.78 3.385A1 1 0 0 0 6.993 3H3.505a.5.5 0 0 0-.394.808L16.23 20.615a1 1 0 0 0 .788.385h3.488a.5.5 0 0 0 .394-.808"
      />
    </svg>
  );
};
export default SvgX;
