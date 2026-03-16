import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditTriangle8 = ({
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
        d="M14.012 9.026c-.123-.247-.423-.344-.684-.252A4 4 0 0 1 12 9c-.466 0-.913-.08-1.329-.226-.26-.092-.56.005-.684.252l-2.974 5.949c-.124.246-.021.544.208.697a4 4 0 0 1 1.748 2.829c.034.274.255.499.531.499h5c.276 0 .497-.225.531-.499a4 4 0 0 1 1.748-2.829c.23-.153.332-.45.209-.697zM10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0m16-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditTriangle8;
