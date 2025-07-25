// src/components/ProjectCard.tsx
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl }: Props) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
