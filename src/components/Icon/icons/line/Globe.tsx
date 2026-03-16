import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGlobe = ({
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
        d="M16.975 13H21v-2h-4.025c-.25-5.053-2.382-9-4.975-9s-4.724 3.947-4.975 9H3v2h4.025c.25 5.053 2.382 9 4.975 9s4.724-3.947 4.975-9m-2.002 0c-.116 2.094-.587 3.899-1.226 5.177C12.948 19.774 12.215 20 12 20s-.948-.226-1.747-1.823c-.639-1.278-1.11-3.083-1.226-5.177zm-5.946-2c.116-2.094.587-3.899 1.226-5.177C11.052 4.226 11.785 4 12 4s.948.226 1.747 1.823c.639 1.278 1.11 3.083 1.226 5.177z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGlobe;
