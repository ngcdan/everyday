import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'data/_posts');
// const postsDirectory = path.resolve('data/_posts');


interface PostId {
  slug: string;
  title: string;
  date: string;
}

interface PostsByTags {
  [tag: string]: PostId[];
}

interface PostsByYear {
  [year: string]: PostsByTags;
}

export function getPostsGroupedByTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsByTags: any = {};
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const { date, title, tags } = matterResult.data;

    if (!dateRegex.test(date)) {
      console.error(`Invalid date format in file: ${fileName}`);
      continue;
    }

    const id = {
      slug: fileName.replace(/\.md$/, ''),
      title: title,
      date: date
    };

    const tagList = tags.split(',').map((tag: string) => tag.trim());

    tagList.forEach((tag: string) => {
      if (!postsByTags[tag]) {
        postsByTags[tag] = [];
      }
      postsByTags[tag].push(id);
    });
  }

  // Sort posts in each tag group by date (newest to oldest)
  for (const tag in postsByTags) {
    postsByTags[tag].sort((a: any, b: any) => b.date.localeCompare(a.date));
  }

  return postsByTags;
}

export function getPostsGroupedByYearAndTags(): PostsByYear {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsByYear: PostsByYear = {};
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const { date, title, tags } = matterResult.data;

    if (!dateRegex.test(date)) {
      console.error(`Invalid date format in file: ${fileName}`);
      continue;
    }

    const year = date.split('-')[0];
    const id: PostId = {
      slug: fileName.replace(/\.md$/, ''),
      title: title,
      date: date
    };

    const tagList = tags.split(',').map((tag: string) => tag.trim());

    if (!postsByYear[year]) {
      postsByYear[year] = {};
    }

    tagList.forEach((tag: string) => {
      if (!postsByYear[year][tag]) {
        postsByYear[year][tag] = [];
      }
      postsByYear[year][tag].push(id);
    });
  }

  // Sort posts in each tag group by date (newest to oldest)
  for (const year in postsByYear) {
    for (const tag in postsByYear[year]) {
      postsByYear[year][tag].sort((a, b) => b.date.localeCompare(a.date));
    }
  }

  return postsByYear;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  let postIds = [];
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regular expression to match yyyy-mm-dd format

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    let { date, title } = matterResult.data;

    if (!dateRegex.test(date)) {
      console.error(`Invalid date format in file: ${fileName}`);
      continue;
    }

    let id = {
      slug: fileName.replace(/\.md$/, ''),
      title: title,
      date: date
    }
    postIds.push(id)
  }
  // Sort posts by date (newest to oldest)
  postIds.sort((a, b) => b.date.localeCompare(a.date));
  return postIds;
}

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
export async function getPostData(slug: any) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    contentHtml,
    ...matterResult.data,
  };
}



