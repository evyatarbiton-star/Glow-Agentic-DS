import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationArrowOff = ({
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
        d="m7.122 7.121-2.185.825c-2.697 1.019-2.546 4.883.222 5.688l3.507 1.02a1 1 0 0 1 .681.68l1.02 3.508c.804 2.767 4.669 2.918 5.687.222l.825-2.186-1.552-1.551-1.144 3.03c-.34.9-1.628.849-1.896-.074l-1.02-3.507a3 3 0 0 0-2.043-2.043l-3.507-1.02c-.923-.268-.973-1.556-.074-1.895l3.03-1.145zM18.956 5.714a.52.52 0 0 0-.67-.67l-5.433 2.051a1 1 0 0 1-.706-1.87l5.433-2.052c2.029-.766 4.014 1.218 3.248 3.248l-2.052 5.432a1 1 0 1 1-1.87-.706z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationArrowOff;
