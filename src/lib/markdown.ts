import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost extends BlogPostMetadata {
  content: string;
  toc?: { id: string; text: string; level: number }[];
}

// Ensure the directory exists
function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getSortedPostsData(): BlogPostMetadata[] {
  ensureDirectory();
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string with syntax highlighting
    const processedContent = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(matterResult.content);
    
    let contentHtml = processedContent.toString();

    // Generate Table of Contents and inject IDs into HTML
    const toc: { id: string; text: string; level: number }[] = [];
    
    contentHtml = contentHtml.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, text) => {
      // Strip any nested HTML tags from the heading text for the slug
      const plainText = text.replace(/<[^>]*>?/gm, '');
      const id = plainText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      
      toc.push({ id, text: plainText, level: parseInt(level) });
      
      return `<h${level} id="${id}" class="scroll-mt-24 group">
        ${text}
        <a href="#${id}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--brand)] text-sm no-underline" aria-label="Link to this section">#</a>
      </h${level}>`;
    });

    return {
      slug,
      content: contentHtml,
      toc,
      ...(matterResult.data as Omit<BlogPostMetadata, 'slug'>),
    };
  } catch (error) {
    return null;
  }
}
