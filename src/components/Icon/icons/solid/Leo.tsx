import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLeo = ({
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
      <path fill={color} d="M8 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748M12.5 7A2.5 2.5 0 0 0 10 9.5c0 .764.185 1.238.43 1.858.26.656.57 1.444.57 2.642a3 3 0 1 1-2.807-2.994A5.8 5.8 0 0 1 8 9.5a4.5 4.5 0 1 1 9 0c0 .644-.164 1.288-.367 1.876a23 23 0 0 1-.698 1.706l-.02.046C15.387 14.327 15 15.256 15 16a1 1 0 1 0 2 0 1 1 0 1 1 2 0 3 3 0 1 1-6 0c0-1.221.58-2.536 1.046-3.591l.042-.094c.253-.574.484-1.096.654-1.591.172-.5.258-.901.258-1.224A2.5 2.5 0 0 0 12.5 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLeo;
