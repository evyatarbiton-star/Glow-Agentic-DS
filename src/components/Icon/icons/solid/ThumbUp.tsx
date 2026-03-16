import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThumbUp = ({
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
        d="M3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17.404 21H10a1 1 0 0 1-1-1v-8.543a2 2 0 0 1 .199-.869l3.311-6.866a1.276 1.276 0 0 1 2.409.764l-.822 4.932a.5.5 0 0 0 .493.582h4.404a2 2 0 0 1 1.95 2.443l-1.59 7A2 2 0 0 1 17.404 21"
      />
    </svg>
  );
};
export default SvgThumbUp;
