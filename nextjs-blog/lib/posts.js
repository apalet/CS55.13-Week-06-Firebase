//In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. 
// It's usually convention to use lib or utils.

// To render markdown content, we’ll use the remark library.
import { remark } from 'remark';
import html from 'remark-html';
// fs is a Node.js module that lets you read files from the file system.
import fs from 'fs';
//path is a Node.js module that lets you manipulate file paths.
import path from 'path';
//matter is a library that lets you parse the metadata in each markdown file. (.md files)
import matter from 'gray-matter';

/*
Create a utility function for parsing data from the file system. With this utility function, we’d like to:

- Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
- List the data on the index page, sorted by date.
*/ 

const postsDirectory = path.join(process.cwd(), 'posts');
 
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
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// getAllPostIds function: return the list of file names (excluding .md) in the posts directory.
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
 
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// getPostData function: return the post data based on id.
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
 
  // Use remark to convert markdown into HTML string
  const processedContent = await remark() //Important: We added the async keyword to getPostData because we need to use await for remark. async/await allow you to fetch data asynchronously.
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
 
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}