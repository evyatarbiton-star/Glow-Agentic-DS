import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSliceTool = ({
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
        d="M20.087 3.913a3.12 3.12 0 0 0-4.414-.001L3.922 15.656C1.949 17.628 3.345 21 6.134 21H10a3 3 0 0 0 3-3v-2.586l7.087-7.087a3.12 3.12 0 0 0 0-4.414m-3 1.414a1.122 1.122 0 0 1 1.586 1.586L12 13.586l-1.588-1.588zm-8.09 8.084-3.661 3.66c-.713.712-.209 1.93.798 1.93H10a1 1 0 0 0 1-1v-2.587z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSliceTool;
