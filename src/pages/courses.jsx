import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';

export default function Courses({ courses }) {
  return (
    <div>
      <h1>Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.slug}>
            <h2>{course.title}</h2>
            {course.lessons ? (
              <ul>
                {course.lessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link href={`/course/${course.slug}/${lesson.slug}`}>
                      <a>{lesson.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Link href={`/course/${course.slug}/`}>
                <a>Start Course</a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const coursesDirectory = path.join(process.cwd(), 'Courses');
  const courseFolderNames = fs.readdirSync(coursesDirectory);

  const courses = courseFolderNames.map((folderName) => {
    const slug = folderName;
    const folderPath = path.join(coursesDirectory, folderName);

    if (!fs.statSync(folderPath).isDirectory()) {
      return null;
    }

    const lessonFileNames = fs.readdirSync(folderPath);
    const lessons = lessonFileNames.map((fileName) => {
      const lessonSlug = fileName.replace(/\.md$/, '');
      const lessonPath = path.join(folderPath, fileName);

      if (!fs.statSync(lessonPath).isFile() || path.extname(fileName) !== '.md') {
        return null;
      }

      const lessonContent = fs.readFileSync(lessonPath, 'utf8');

      // Convert markdown to HTML
      const md = new MarkdownIt();
      const lessonHtml = md.render(lessonContent.toString());

      const lessonTitleMatch = lessonHtml.match(/<h1>(.*?)<\/h1>/);
      const lessonTitle = lessonTitleMatch?.[1] ?? lessonSlug;

      return {
        slug: lessonSlug,
        title: lessonTitle,
      };
    }).filter((lesson) => lesson !== null);

    return {
      slug,
      title: slug,
      lessons: lessons.length > 0 ? lessons : null,
    };
  }).filter((course) => course !== null);

  return {
    props: {
      courses,
    },
  };
}
