interface SocialMediaProps {
  title: string;
  children: React.ReactElement;
  path: string;
}

export const SocialMedia = ({ children, title, path }: SocialMediaProps) => {
  return (
    <a href={path} target="_blank" title={title}>
      {children}
    </a>
  )
}
