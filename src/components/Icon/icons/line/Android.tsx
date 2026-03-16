import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAndroid = ({
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
        d="M4 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m16 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1M15 11H9v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm0 6.83A3 3 0 0 0 17 15V9H7v6c0 1.306.835 2.418 2 2.83V20a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.553 3.106a1 1 0 0 1 1.341.447l.377.754A5 5 0 0 1 12 4c.608 0 1.19.109 1.729.307l.377-.754a1 1 0 1 1 1.788.894l-.46.92A4.99 4.99 0 0 1 17 9v2H7V9c0-1.431.601-2.722 1.565-3.633l-.46-.92a1 1 0 0 1 .448-1.341M15 9a3 3 0 1 0-6 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAndroid;
