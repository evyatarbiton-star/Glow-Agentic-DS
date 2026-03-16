import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStarOff = ({
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
        d="m7.259 7.259-2.966.248c-2.178.183-3.09 2.874-1.472 4.343l2.943 2.67-.963 4.437c-.487 2.241 2.05 3.9 3.908 2.556l3.29-2.38 3.292 2.38c1.778 1.286 4.176-.177 3.954-2.268l-2.594-2.594.593 2.73a.5.5 0 0 1-.781.512L12.879 17.3a1.5 1.5 0 0 0-1.758 0l-3.584 2.592a.5.5 0 0 1-.781-.512l1.024-4.718a1.5 1.5 0 0 0-.458-1.43L4.166 10.37A.5.5 0 0 1 4.46 9.5l4.149-.347q.23-.021.439-.105z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.699 3.519c.862-2.03 3.74-2.03 4.602 0l1.557 3.666 3.849.322c2.177.183 3.09 2.874 1.471 4.343l-1.704 1.547a1 1 0 1 1-1.344-1.481l1.704-1.547a.5.5 0 0 0-.294-.869l-4.149-.347a1.5 1.5 0 0 1-1.255-.908L12.46 4.3a.5.5 0 0 0-.92 0l-.207.486a1 1 0 1 1-1.84-.782zM2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStarOff;
