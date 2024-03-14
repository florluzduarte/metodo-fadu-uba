interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="font-bold text-[32px] xl:text-[64px]">
      {text}
    </h1>
  )
}
