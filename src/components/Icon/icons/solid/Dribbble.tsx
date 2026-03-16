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
        fillRule="evenodd"
        d="M17.357 20.446A10 10 0 0 0 21.95 13c-2.585.01-4.501.082-6.394.652a33.3 33.3 0 0 1 1.8 6.793m-3.662-6.063c-2.038.988-4.318 2.715-7.453 5.794A9.95 9.95 0 0 0 12 22c1.222 0 2.392-.22 3.474-.62-.355-2.53-.946-4.826-1.78-6.997m1.083-2.582c2.267-.718 4.498-.793 7.173-.8a9.95 9.95 0 0 0-1.824-4.829c-1.983 1.535-4.006 2.778-6.298 3.716q.506.945.95 1.913m-2.85-1.226q.53.97.988 1.963c-2.383 1.136-4.897 3.078-8.19 6.325A9.97 9.97 0 0 1 2 12v-.008c3.923-.067 7.122-.533 9.927-1.417m.9-2.44c2.155-.852 4.066-2.002 5.973-3.466A9.97 9.97 0 0 0 12 2a10 10 0 0 0-3.189.52c1.53 1.879 2.87 3.726 4.017 5.615M6.93 3.38C8.445 5.213 9.764 6.995 10.889 8.8c-2.424.713-5.224 1.113-8.686 1.187A10.01 10.01 0 0 1 6.93 3.38"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDribbble;
