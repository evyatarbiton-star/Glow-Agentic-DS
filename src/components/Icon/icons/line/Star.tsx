import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStar = ({
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
        d="M9.699 3.519c.862-2.03 3.74-2.03 4.602 0l1.557 3.666 3.849.322c2.177.183 3.09 2.874 1.471 4.343l-2.943 2.67.964 4.437c.486 2.241-2.05 3.9-3.908 2.556L12 19.133l-3.291 2.38c-1.859 1.344-4.395-.315-3.908-2.556l.963-4.436-2.943-2.671c-1.618-1.469-.706-4.16 1.472-4.343l3.848-.322zm2.761.782a.5.5 0 0 0-.92 0L9.864 8.245a1.5 1.5 0 0 1-1.255.908l-4.15.347a.5.5 0 0 0-.293.869l3.156 2.865a1.5 1.5 0 0 1 .458 1.429l-1.024 4.718a.5.5 0 0 0 .781.512l3.584-2.592a1.5 1.5 0 0 1 1.758 0l3.584 2.592a.5.5 0 0 0 .781-.512l-1.024-4.718a1.5 1.5 0 0 1 .457-1.429l3.157-2.865a.5.5 0 0 0-.294-.869l-4.149-.347a1.5 1.5 0 0 1-1.255-.908z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStar;
