import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEyeOff = ({
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
        d="M18.031 18.03 14.83 14.83a4 4 0 1 1-5.657-5.657L5.97 5.97c-2.058 1.552-3.195 3.638-3.7 4.77a3.09 3.09 0 0 0 0 2.52C3.14 15.213 5.893 20 12.002 20c2.566 0 4.54-.844 6.03-1.97"
      />
      <path
        fill={color}
        d="M10.586 10.586a2 2 0 1 0 2.828 2.829zM12 4c6.11 0 8.861 4.788 9.73 6.74a3.09 3.09 0 0 1 0 2.52c-.155.35-.364.775-.634 1.24a1 1 0 0 1-1.73-1c.229-.398.406-.76.537-1.053a1.09 1.09 0 0 0 0-.893C19.11 9.772 16.856 6 12 6h-1a1 1 0 1 1 0-2z"
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
export default SvgEyeOff;
