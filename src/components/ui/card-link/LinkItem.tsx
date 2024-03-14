import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface LinkItemProps {
  text: string;
  path: string;
  type: "external" | "internal";
  iconPosition: "left" | "right";
}

export const LinkItem = ({ text, path, type, iconPosition }: LinkItemProps) => {
  if (type === "external") {
    return (
      <div className="flex gap-1 items-center">
        {
          iconPosition === "left" && <IoChevronBack size={24} className="text-green-400" />
        }
        <a href={path} target="_blank" title={text}
          className="hover:underline"
        >
          {text}
        </a>
        {
          iconPosition === "right" && <IoChevronForward size={24} className="text-green-400" />
        }
      </div>
    )
  };

  if (type === "internal") {
    return (
      <div className="flex gap-1 items-center">
        {
          iconPosition === "left" && <IoChevronBack size={24} className="text-green-400" />
        }

        <Link href={path} className="hover:underline">
          {text}
        </Link>

        {
          iconPosition === "right" && <IoChevronForward size={24} className="text-green-400" />
        }
      </div>
    )
  }
};
