import fs from 'fs';
import { join } from 'path';

const projectsDirectory = join(process.cwd(), '_projects');

export function getProjectslugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { title, description } = JSON.parse(fileContents);

  const items = {
    slug: realSlug,
    title: title,
    description: description,
  };

  return items;
}

export function getAllProjects() {
  const slugs = getProjectslugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects;
}
