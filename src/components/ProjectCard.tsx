"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Placeholder images from Unsplash related to data science
  const imageUrls = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // Charts/Analytics
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // Data visualization
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', // Code/Tech
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80', // Networks
  ];

  return (
    <div
      className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-muted overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={imageUrls[index % imageUrls.length]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="text-6xl font-bold text-primary/30">
            {index + 1}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
