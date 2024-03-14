import cslx from "clsx";

interface SubtitleProps {
  text: string;
  type: "bold" | "regular";
}

export const Subtitle = ({ text, type }: SubtitleProps) => {
  return (
    <h2 className={cslx("text-[20px] xl:text-[32px]", type === "bold" && "font-bold")}>{text}</h2>
  )
}
