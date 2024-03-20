import { IoLogoYoutube } from "react-icons/io5"
import { BsInstagram, BsSpotify } from "react-icons/bs"
import { LogoFadu, LogoMetodo, SocialMedia } from "@/components";

const socialMediaLinks = [
  {
    title: "Instagram",
    logo: <BsInstagram size={24} className="text-black hover:text-green-400" />,
    path: "https://instagram.com/metodo_uba",
  },
  {
    title: "YouTube",
    logo: <IoLogoYoutube size={24} className="text-black hover:text-green-400" />,
    path: "https://youtube.com/@metodo_uba",
  },
  {
    title: "Spotify",
    logo: <BsSpotify size={24} className="text-black hover:text-green-400" />,
    path: "https://open.spotify.com/show/4IUYhwk15bHYC1MoAITyH8?si=Fq2mnamNSF-fWZgy4xjaqA"
  }
]

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center gap-3 py-14 border-y-[0.5px] border-y-gray-300 xl:flex-row-reverse xl:justify-center xl:gap-6 xl:py-8">
        <div>
          <LogoFadu />
        </div>
        <div className="flex flex-col items-center gap-3 mt-3 xl:flex-row xl:gap-6">
          <LogoMetodo />
          <p className="font-bold">Metodología de la investigación en Diseño</p>
          <p>2024 - Cátedra Ex-Galán</p>
          <div className="flex gap-3">
            {
              socialMediaLinks.map((link) => (
                <SocialMedia key={link.title} {...link}>
                  {link.logo}
                </SocialMedia>
              ))
            }
          </div>
          <p>cat.exgalan@fadu.uba.ar</p>
        </div>
      </div>
      <div className="text-sm flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center py-6">
        <a href="https://www.linkedin.com/in/malena-pasin-868a6820/"
          target="_blank" title="Perfil de Linkedin"
          className="hover:underline"
        >
          <p>Gestión del proyecto por Malena Pasin</p>
        </a>
        <a href="https://florluzduarte.unicornio.dev"
          target="_blank" title="Portfolio"
          className="hover:underline"
        >
          <p>Diseño y Desarrollo Web por Flor Luz Duarte</p>
        </a>
      </div>
    </footer>
  )
}
