import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSyringe = ({
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
        d="M13.707 12.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414zm-2.5 2.5a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.707 4.293a1 1 0 1 0-1.414 1.414l.293.293-4.78 4.78a5 5 0 0 0-1.367 4.515l.475 2.376-1.621 1.622a1 1 0 1 0 1.414 1.414l1.622-1.622 2.376.476a5 5 0 0 0 4.516-1.368L18 13.414l.293.293a1 1 0 0 0 1.414-1.414L19.414 12l-.707-.707-6-6L12 4.586zM16.586 12 12 7.414l-4.78 4.78a3 3 0 0 0-.82 2.709l.45 2.247 2.247.45a3 3 0 0 0 2.71-.82z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.707 3.293a1 1 0 1 0-1.414 1.414L16.586 6l-2.293 2.293a1 1 0 0 0 1.414 1.414L18 7.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSyringe;
