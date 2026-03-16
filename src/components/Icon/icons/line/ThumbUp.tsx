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
        fillRule="evenodd"
        d="M3 13a3 3 0 0 1 3-3h3v11H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v-7z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.848 4.227a2.5 2.5 0 0 1 3.5-.832l.328.21a2.5 2.5 0 0 1 1.104 2.596L15.22 9H18a3 3 0 0 1 2.966 3.454l-.918 6A3 3 0 0 1 17.083 21H7v-9.452a3 3 0 0 1 .419-1.529zm2.421.852a.5.5 0 0 0-.7.167l-3.43 5.792a1 1 0 0 0-.139.51V19h8.083a1 1 0 0 0 .988-.849l.918-6A1 1 0 0 0 18.001 11H14.61a1.5 1.5 0 0 1-1.471-1.794l.68-3.397a.5.5 0 0 0-.221-.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThumbUp;
