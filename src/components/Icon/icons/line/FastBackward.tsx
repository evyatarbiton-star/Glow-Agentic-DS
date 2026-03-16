import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFastBackward = ({
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
      <path fill={color} d="M21.001 4a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.001 6.007c0-2.469-2.815-3.88-4.793-2.405L4.226 9.555a3.05 3.05 0 0 0 0 4.89l7.982 5.953c1.978 1.476 4.793.064 4.793-2.405zm-3.598-.802a1 1 0 0 1 1.598.802v11.986a1 1 0 0 1-1.598.802l-7.98-5.953a1.05 1.05 0 0 1 0-1.684z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFastBackward;
