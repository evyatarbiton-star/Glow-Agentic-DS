import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlbumLibrary = ({
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
        d="M4.327 7.638C4 8.28 4 9.12 4 10.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2v-6.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 6 16.88 6 15.2 6H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 3a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default SvgAlbumLibrary;
