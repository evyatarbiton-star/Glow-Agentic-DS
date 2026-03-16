import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFootballBall = ({
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
        d="M12 6c-4.855 0-7.11 3.773-7.903 5.553a1.09 1.09 0 0 0 0 .894C4.89 14.227 7.145 18 12 18s7.11-3.773 7.903-5.553a1.09 1.09 0 0 0 0-.893C19.11 9.772 16.855 6 12 6m-9.73 4.74C3.14 8.788 5.89 4 12 4s8.86 4.788 9.73 6.74a3.09 3.09 0 0 1 0 2.52C20.86 15.212 18.109 20 12 20s-8.86-4.788-9.73-6.74a3.09 3.09 0 0 1 0-2.52"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 10a1 1 0 0 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-2v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFootballBall;
