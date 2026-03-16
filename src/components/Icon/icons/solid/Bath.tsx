import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBath = ({
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
        d="M3 9a1 1 0 0 0 0 2h.22l1.052 4.213a5 5 0 0 0 1.116 2.112l-.358 1.433a1 1 0 1 0 1.94.485l.164-.655a5 5 0 0 0 1.99.412h5.753c.701 0 1.375-.146 1.989-.412l.164.654a1 1 0 0 0 1.94-.485l-.358-1.432a5 5 0 0 0 1.116-2.112L20.78 11H21a1 1 0 1 0 0-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12.959.502c.045.272-.183.498-.459.498h-8.838c-.316 0-.555-.293-.418-.579a2.5 2.5 0 0 1 4.032-.68 3 3 0 0 1 5.683.761"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBath;
