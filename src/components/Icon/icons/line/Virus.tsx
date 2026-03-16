import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVirus = ({
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
        d="m19.778 5.636-1.414-1.414-2.888 2.887A6 6 0 0 0 13 6.083V2h-2v4.083a6 6 0 0 0-2.477 1.026L5.636 4.222 4.222 5.636l2.887 2.888A6 6 0 0 0 6.083 11H2v2h4.083a6 6 0 0 0 1.026 2.476l-2.887 2.888 1.414 1.414 2.887-2.887A6 6 0 0 0 11 17.917V22h2v-4.083a6 6 0 0 0 2.476-1.026l2.888 2.888 1.414-1.415-2.887-2.887A6 6 0 0 0 17.917 13H22v-2h-4.083a6 6 0 0 0-1.026-2.477zM9.14 14.796l.064.064A4 4 0 0 0 16 12.002v-.004A4 4 0 0 0 9.204 9.14l-.064.064A3.99 3.99 0 0 0 8 12c0 1.088.435 2.075 1.14 2.796"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19.778 7.05a1 1 0 0 0 0-1.414L18.364 4.22a1 1 0 1 0-1.414 1.415l1.414 1.414a1 1 0 0 0 1.414 0M14 3a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1m7 11a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1M3 14a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1m10 6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM5.636 7.05a1 1 0 0 1-1.414-1.414l1.414-1.414A1 1 0 1 1 7.05 5.636zM16.95 19.779a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 0 1.414m-9.9-1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVirus;
