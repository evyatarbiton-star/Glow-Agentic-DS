import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSim = ({
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
        d="M3.638 19.673C4.28 20 5.12 20 6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H8.435c-.743 0-1.114 0-1.463.085a3 3 0 0 0-.875.367c-.305.19-.565.454-1.086.984L3.376 7.099c-.508.517-.762.776-.943 1.076a3 3 0 0 0-.352.86C2 9.376 2 9.739 2 10.464V15.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311m7.471-8.127C11 11.76 11 12.04 11 12.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C11.76 16 12.04 16 12.6 16h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C18 15.24 18 14.96 18 14.4v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C17.24 11 16.96 11 16.4 11h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSim;
