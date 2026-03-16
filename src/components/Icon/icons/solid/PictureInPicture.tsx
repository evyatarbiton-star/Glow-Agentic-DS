import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPictureInPicture = ({
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
        d="M14 15.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C14.76 14 15.04 14 15.6 14h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C22 14.76 22 15.04 22 15.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C21.24 20 20.96 20 20.4 20h-4.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C14 19.24 14 18.96 14 18.4z"
      />
      <path
        fill={color}
        d="M15.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 18 5.12 18 6.8 18h4.4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C12 17.62 12 17.48 12 17.2v-2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C13.52 12 14.08 12 15.2 12h4c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C20 11.62 20 11.48 20 11.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 4 16.88 4 15.2 4"
      />
    </svg>
  );
};
export default SvgPictureInPicture;
