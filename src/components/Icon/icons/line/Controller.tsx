import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgController = ({
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
        d="M7.565 6a3 3 0 0 0-2.988 2.727l-.565 6.192a2.824 2.824 0 0 0 4.595 2.447C9.343 16.766 10.513 16 12 16c1.488 0 2.658.767 3.393 1.366a2.824 2.824 0 0 0 4.595-2.447l-.565-6.192A3 3 0 0 0 16.436 6zm0-2a5 5 0 0 0-4.98 4.546l-.565 6.192a4.824 4.824 0 0 0 7.85 4.179C10.487 18.415 11.207 18 12 18s1.514.415 2.13.917a4.824 4.824 0 0 0 7.85-4.18l-.565-6.191A5 5 0 0 0 16.435 4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 8a1 1 0 0 0-1 1v1H7a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V9a1 1 0 0 0-1-1M16 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
};
export default SvgController;
