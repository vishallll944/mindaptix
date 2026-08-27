import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  tags?: string[];
  image: string;
  chatHref?: string;
  className?: string;
};

export function TeamCard({
  name,
  role,
  bio,
  tags = [],
  image,
  chatHref = "/contact",
  className = "",
}: TeamCardProps) {
  const firstName = name.split(" ")[0] ?? name;

  return (
    <article className={`team-card${className ? ` ${className}` : ""}`}>
      <div className="team-card__photo">
        <Image src={image} alt={`${name}, ${role}`} width={400} height={400} />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__role">{role}</p>
        <p className="team-card__bio">{bio}</p>
        {tags.length > 0 ? (
          <ul className="team-card__tags">
            {tags.map((tag) => (
              <li key={tag} className="team-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        <Button href={chatHref} variant="outline" size="sm" className="team-card__chat">
          <MessageCircle size={16} aria-hidden />
          Chat with {firstName}
        </Button>
      </div>
    </article>
  );
}
