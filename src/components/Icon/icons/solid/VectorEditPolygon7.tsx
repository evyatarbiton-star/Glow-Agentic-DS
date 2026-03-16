import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditPolygon7 = ({
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
        d="M18.74 10.439c-.046-.272-.304-.453-.58-.442L18 10a4 4 0 0 1-3.97-3.501C13.996 6.225 13.775 6 13.5 6h-3c-.277 0-.498.225-.532.499a4 4 0 0 1-4.13 3.498c-.276-.011-.533.17-.579.442l-.52 3.121c-.045.273.14.527.406.606a4 4 0 0 1 2.823 3.335c.035.274.255.499.531.499h7c.276 0 .497-.225.531-.499a4 4 0 0 1 2.824-3.335c.265-.079.45-.333.405-.606zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0M4 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditPolygon7;
