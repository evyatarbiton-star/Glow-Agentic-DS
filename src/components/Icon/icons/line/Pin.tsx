import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPin = ({
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
      <path fill={color} d="M11 17a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="m9.79 4-.764 6.873a3 3 0 0 1-.86 1.789l-.923.924A.828.828 0 0 0 7.828 15h8.344a.828.828 0 0 0 .585-1.414l-.924-.924a3 3 0 0 1-.86-1.789L14.21 4zm-.895-2a1 1 0 0 0-.994.89l-.862 7.762a1 1 0 0 1-.286.595l-.925.925a2.828 2.828 0 0 0 2 4.828h8.344a2.828 2.828 0 0 0 2-4.828l-.925-.925a1 1 0 0 1-.286-.595L16.1 2.89a1 1 0 0 0-.994-.89z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgPin;
