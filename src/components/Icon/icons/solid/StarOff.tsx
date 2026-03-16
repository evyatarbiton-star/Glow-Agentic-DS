import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStarOff = ({
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
        d="m8.067 8.066-4.684.383c-1.32.107-1.863 1.747-.869 2.621l3.693 3.248a.5.5 0 0 1 .158.482l-1.18 5.368c-.296 1.34 1.216 2.34 2.334 1.544l4.192-2.985a.5.5 0 0 1 .58 0l4.191 2.985c1.118.796 2.63-.204 2.335-1.544l-.38-1.732zM19.281 10.346l-3.692-.3a2.5 2.5 0 0 1-2.115-1.557L12 4.836l-.222.55a1 1 0 0 1-1.855-.747l.686-1.7c.505-1.252 2.277-1.252 2.782 0L15.33 7.74a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.862 1.747.868 2.621l-2.488 2.189a1 1 0 1 1-1.32-1.502z"
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
export default SvgStarOff;
