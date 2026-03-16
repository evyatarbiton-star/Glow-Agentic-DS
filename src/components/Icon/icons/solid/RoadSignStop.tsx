import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignStop = ({
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
        d="M9.242 2c-.407 0-.765 0-1.114.083a3 3 0 0 0-.867.36c-.306.186-.559.44-.846.728L3.17 6.414c-.288.288-.542.541-.729.847a3 3 0 0 0-.359.867C1.999 8.477 2 8.835 2 9.242v5.516c0 .407 0 .765.083 1.114a3 3 0 0 0 .36.867c.186.306.44.559.728.846l3.244 3.244c.287.288.54.542.846.729a3 3 0 0 0 .867.36c.349.083.707.082 1.114.082h5.516c.407 0 .766 0 1.114-.083a3 3 0 0 0 .867-.36c.306-.186.56-.44.847-.728l3.243-3.244c.288-.287.542-.54.729-.846a3 3 0 0 0 .36-.867c.083-.349.082-.707.082-1.114V9.242c0-.407 0-.765-.083-1.114a3 3 0 0 0-.359-.867c-.187-.306-.441-.56-.73-.847l-3.242-3.243c-.288-.288-.541-.542-.847-.729a3 3 0 0 0-.867-.36C15.524 2 15.165 2 14.758 2z"
      />
    </svg>
  );
};
export default SvgRoadSignStop;
