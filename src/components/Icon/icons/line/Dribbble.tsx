import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDribbble = ({
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
        d="M15.474 21.38c-.355-2.53-.947-4.826-1.78-6.997-2.038.989-4.317 2.715-7.452 5.794a10 10 0 0 1-1.516-1.314c3.293-3.247 5.807-5.188 8.19-6.324a32 32 0 0 0-.99-1.964c-2.805.884-6.003 1.35-9.926 1.417q.002-1.032.203-2.004c3.461-.075 6.262-.475 8.686-1.187-1.125-1.806-2.444-3.587-3.96-5.422a10 10 0 0 1 1.882-.86c1.53 1.88 2.87 3.727 4.016 5.617 2.156-.853 4.067-2.003 5.974-3.467.49.455.935.959 1.326 1.504-1.984 1.534-4.007 2.778-6.298 3.715q.506.945.949 1.913c2.267-.718 4.498-.792 7.173-.8a10 10 0 0 1 0 2c-2.585.01-4.501.083-6.394.652a33.3 33.3 0 0 1 1.8 6.793 10 10 0 0 1-1.883.934"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDribbble;
