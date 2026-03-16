import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPerspective6 = ({
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
        d="M15 5a1 1 0 1 0-2 0v6h-3V7a1 1 0 1 0-2 0v4H4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h3v6a1 1 0 1 0 2 0v-6h5a1 1 0 1 0 0-2h-5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 5.985a3 3 0 0 0-3.641-2.93l-12 2.624A3 3 0 0 0 3 8.61v6.781a3 3 0 0 0 2.359 2.93l12 2.626A3 3 0 0 0 21 18.016zm-3.214-.977A1 1 0 0 1 19 5.985v12.03a1 1 0 0 1-1.214.977l-12-2.625A1 1 0 0 1 5 15.39V8.61a1 1 0 0 1 .786-.977z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPerspective6;
