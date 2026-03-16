import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPen = ({
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
        d="m14.416 20.416-.062-.062a.5.5 0 0 1 0-.708l5.292-5.292a.5.5 0 0 1 .707 0l.063.062a2 2 0 0 1 0 2.828l-3.172 3.172a2 2 0 0 1-2.828 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.014 5.9 4.49 13.41a5 5 0 0 0 2.937 3.631l4.262 1.827a.5.5 0 0 0 .55-.106l6.521-6.522a.5.5 0 0 0 .106-.55L17.04 7.427a5 5 0 0 0-3.631-2.936l-7.52-1.478a.5.5 0 0 0-.452.841l5.119 5.195Q10.77 9.001 11 9a2 2 0 1 1-1.96 1.594L3.858 5.45a.5.5 0 0 0-.843.451"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPen;
