import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

export default function Lesson({ lessonData }) {
  const { content, data } = lessonData;

  return (
    <div>
      <h1>{data.title}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
}

export async function getStaticPaths() {
  const coursesDirectory = path.join(process.cwd(), 'Courses');
  const fileNames = fs.readdirSync(coursesDirectory);

  const paths = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const coursesDirectory = path.join(process.cwd(), 'Courses');
  const lessonFilePath = path.join(coursesDirectory, `${params.slug}.md`);
  const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8');

  const { data, content } = matter(lessonFileContent);

  return {
    props: {
      lessonData: {
        data,
        content
      },
    },
  };
}

