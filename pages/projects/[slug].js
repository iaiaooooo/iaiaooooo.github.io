import { React } from 'react';
import { getProjectBySlug, getAllProjects } from '../../utils/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import ExportedImage from 'next-image-export-optimizer';

import ReactMarkdown from 'react-markdown';

const ProjectArticle = ({ project }) => {
  return (
    <div className="global-background">
      <Head>
        <title>{project.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="h-15 md:h-20 w-full bg-colored"></div>

      <div className="section-with-title">
        <div className="section-title text-4xl md:text-6xl xl:text-8xl 2xl:text-9xl mb-15 md:mb-10 text-colored">
          {project.title}
        </div>

        {project.description.map((section, index) => (
          <ProjectSection key={index} section={section} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

const ProjectSection = ({ section }) => {
  const DEFAULT_IMAGE_SIZE = 400;

  return (
    <div>
      <div className="content-container mt-10 text-2xl 2xl:text-3xl">
        <ReactMarkdown>{section.text}</ReactMarkdown>
      </div>

      <div className="content-container mt-10 pb-10 grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-20">
        <div className="flex flex-col gap-10 xl:gap-16">
          {section.images.map(
            (image, index) =>
              index % 2 == 0 && (
                <ExportedImage
                  key={index}
                  className="h-auto w-full rounded-4xl"
                  src={image}
                  width={DEFAULT_IMAGE_SIZE}
                  height={DEFAULT_IMAGE_SIZE}
                  layout="responsive"
                />
              )
          )}
        </div>
        <div className="flex flex-col gap-10 xl:gap-16">
          {section.images.map(
            (image, index) =>
              index % 2 != 0 && (
                <ExportedImage
                  key={index}
                  className="h-auto w-full rounded-4xl"
                  src={image}
                  width={DEFAULT_IMAGE_SIZE}
                  height={DEFAULT_IMAGE_SIZE}
                  layout="responsive"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    props: {
      project: {
        ...project,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects();

  return {
    paths: projects.map((prj) => {
      return {
        params: {
          slug: prj.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default ProjectArticle;
