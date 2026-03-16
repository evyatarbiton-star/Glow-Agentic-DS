import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPinterest = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a10 10 0 0 0 5.606 8.985.48.48 0 0 0 .67-.312l1.44-5.185.005-.021 1.316-4.735a1 1 0 1 1 1.926.536l-1.052 3.788c1.251.265 2.129.038 2.716-.35.743-.491 1.22-1.37 1.34-2.414s-.136-2.142-.721-2.954C14.683 8.556 13.793 8 12.5 8c-1.92 0-3.064.831-3.622 1.854-.58 1.064-.6 2.467.016 3.699a1 1 0 1 1-1.788.894c-.885-1.768-.903-3.865.016-5.55C8.064 7.168 9.921 6 12.5 6c1.957 0 3.442.882 4.37 2.17.905 1.258 1.254 2.864 1.084 4.35s-.878 2.965-2.224 3.855c-1.15.759-2.629 1.002-4.355.61l-1.195 4.303a.48.48 0 0 0 .387.61Q11.269 22 12 22"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPinterest;
