import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDoorSign = ({
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
        d="M3.218 12.092C3 12.52 3 13.08 3 14.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-3.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 11 18.92 11 17.8 11H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M12.518 6.932a2 2 0 0 1-1.036 0L9.707 8.707a1 1 0 1 1-1.414-1.414l1.775-1.775a2 2 0 1 1 3.865 0l1.774 1.775a1 1 0 0 1-1.414 1.414z"
      />
    </svg>
  );
};
export default SvgDoorSign;
