import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSafe = ({
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
        d="M3.327 4.638C3 5.28 3 6.12 3 7.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.356.182.774.262 1.362.298V20a1 1 0 1 0 2 0v-1h8v1a1 1 0 1 0 2 0v-1.029c.588-.036 1.006-.116 1.362-.298a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3.83 1A3 3 0 0 0 11 13.83V15a1 1 0 1 0 2 0v-1.17A3 3 0 0 0 14.83 12H16a1 1 0 1 0 0-2h-1.17A3 3 0 0 0 13 8.17V7a1 1 0 1 0-2 0v1.17A3 3 0 0 0 9.17 10H8a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSafe;
