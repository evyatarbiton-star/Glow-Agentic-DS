import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCarrot = ({
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
        d="M9.793 7.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M5.793 12.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 1 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M12.707 13.293a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.414-1.414zM16 9a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v1.586l2.293-2.293a1 1 0 1 1 1.414 1.414L18.414 7H20a1 1 0 1 1 0 2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.32 18.68a24.2 24.2 0 0 0 6.064-2.37c1.422-.801 2.62-1.71 3.443-2.662C15.644 12.7 16 11.82 16 11c0-1.045-.34-1.761-.79-2.21C14.762 8.34 14.047 8 13 8c-.82 0-1.701.357-2.647 1.173-.953.822-1.861 2.022-2.663 3.444a24.2 24.2 0 0 0-2.37 6.064m-2.322 1.844C3.295 16.182 7.233 6 13 6c3 0 5 2 5 5 0 5.767-10.181 9.706-14.524 10.002a.444.444 0 0 1-.478-.478"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCarrot;
