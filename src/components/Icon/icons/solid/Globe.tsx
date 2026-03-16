import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGlobe = ({
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
        d="M15.488 2.625A10.01 10.01 0 0 1 21.95 11H17.98c-.162-3.88-1.254-6.604-2.485-8.373zM12 2c-3.043 1.442-3.89 6.085-4.022 9h7.999c-.139-3.048-1.004-7.352-3.978-9m-3.554.65C7.22 4.419 6.137 7.136 5.976 11H2.049a10.01 10.01 0 0 1 6.397-8.35m7.042 18.725A10.01 10.01 0 0 0 21.95 13h-3.97c-.163 3.88-1.255 6.604-2.486 8.373zM12 22c-3.043-1.442-3.889-6.085-4.022-9h8c-.14 3.048-1.005 7.352-3.978 9m-3.554-.65c-1.225-1.769-2.309-4.486-2.47-8.35H2.05a10.01 10.01 0 0 0 6.397 8.35"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGlobe;
