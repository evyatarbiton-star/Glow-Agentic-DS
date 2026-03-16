import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWineGlass = ({
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
      <path fill={color} d="M11 14v6H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-6z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.828 2.54C7.43 2.106 8.118 2 8.682 2h6.635c.564 0 1.253.107 1.854.54 2.19 1.576 3.262 4.92 2.67 7.814-.305 1.488-1.058 2.92-2.382 3.974C16.134 15.385 14.32 16 12 16c-2.318 0-4.134-.615-5.46-1.672-1.323-1.055-2.076-2.486-2.38-3.974-.593-2.895.479-6.238 2.67-7.815M8.682 4c-.338 0-.554.068-.685.162-1.432 1.031-2.346 3.513-1.879 5.79.225 1.1.764 2.091 1.668 2.813C8.69 13.485 10.04 14 12 14s3.31-.515 4.213-1.235c.904-.722 1.443-1.714 1.668-2.812.467-2.278-.447-4.76-1.879-5.79-.13-.095-.347-.163-.685-.163z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWineGlass;
