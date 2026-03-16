import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgApple1 = ({
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
        d="M8 4a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5H7a1 1 0 0 0 0 2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M17.5 2h2a.5.5 0 0 1 .5.5A2.5 2.5 0 0 1 17.5 5h-2a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 1 17.5 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.5 22c-3 0-5.5-5-5.5-8.5S6 7 9.5 7c.946 0 1.783.22 2.5.608C12.717 7.22 13.554 7 14.5 7 18 7 20 10 20 13.5S17.5 22 14.5 22c-.896 0-1.747-.446-2.5-1.164-.753.718-1.604 1.164-2.5 1.164M9 13.5a.5.5 0 0 1 .5-.5 1.5 1.5 0 0 1 1.5 1.5v1a.5.5 0 0 1-.5.5A1.5 1.5 0 0 1 9 14.5zm6 0a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 0-1.5 1.5v1a.5.5 0 0 0 .5.5 1.5 1.5 0 0 0 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgApple1;
