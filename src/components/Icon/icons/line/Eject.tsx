import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEject = ({
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
        d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.006 17c-2.468 0-3.88-2.815-2.404-4.794l5.953-7.98a3.05 3.05 0 0 1 4.89 0l5.952 7.98c1.476 1.98.064 4.794-2.404 4.794zm-.801-3.598A1 1 0 0 0 6.006 15h11.987a1 1 0 0 0 .801-1.598l-5.953-7.981a1.05 1.05 0 0 0-1.683 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEject;
