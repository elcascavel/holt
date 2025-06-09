import type React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandFacebook,
  TbLink,
  TbCalendar,
} from "react-icons/tb";
import ProjectsTags from "./project-tags";

type MetadataDisplayProps = {
  data: {
    title: string;
    image: { url: string; alt: string };
    date: string;
    links: { url: string; text: string }[];
    tags: string[];
  };
};

const iconMap: Record<string, React.ElementType> = {
  github: TbBrandGithub,
  instagram: TbBrandInstagram,
  facebook: TbBrandFacebook,
  website: TbLink,
  default: TbLink,
};

const ProjectMetadataDisplay: React.FC<MetadataDisplayProps> = ({ data }) => {
  const { title, date, links, tags, image } = data;

  const getIconForLink = (text: string) => {
    const key = text.toLowerCase();
    return iconMap[key] || iconMap.default;
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      {image?.url && (
        <img
          src={image.url}
          alt={image.alt}
          className="max-w-5xl object-cover rounded-lg"
        />
      )}
      <div className="flex flex-col gap-2 text-sm">
        <h1 className="text-4xl font-bold text-drac-marcelin-400">{title}</h1>
        <div className="flex items-center gap-2">
          {date && (
            <>
              <TbCalendar size={16} />
              <span>{new Date(date).toLocaleDateString()}</span>
            </>
          )}
          <div className="flex flex-col items-center gap-2 text-sm">
            {links?.map((link) => {
              const Icon = getIconForLink(link.text);
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-drac-marcelin-400 transition-colors"
                  title={link.text}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {<ProjectsTags tags={tags} />}
      <hr className="border-drac-nosferatu-700 mt-4" />
    </div>
  );
};

export default ProjectMetadataDisplay;
