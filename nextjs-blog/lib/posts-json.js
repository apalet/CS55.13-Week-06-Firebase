// fs is a Node.js module that lets you read files from the file system.
import fs from 'fs';
//path is a Node.js module that lets you manipulate file paths.
import path from 'path';

// Defines the directory where the data files are stored.
const dataDir = path.join(process.cwd(), 'data');

// Auxiliar Function that reads posts.json and converts its JSON content into a JavaScript object.
function getPostsData() {
    const filePath = path.join(dataDir, 'posts.json');     // Creates the full path to the posts.json file.
    const jsonString = fs.readFileSync(filePath, 'utf8');    // Reads the JSON file as a text string.
    const jsonObj = JSON.parse(jsonString);    // Converts the JSON string into a JavaScript array of objects.
    return jsonObj;    // Returns the parsed posts data so other functions can use it.
}

// Returns all posts sorted alphabetically by title.
export function getSortedPostsData() {
    const jsonObj = getPostsData();     // Gets the posts data from the helper function.

    jsonObj.sort(function (a, b) {    // Sorts the posts alphabetically by their title.
        return a.title.localeCompare(b.title);
    });
    return jsonObj.map(item => {    // Creates a new array containing only the data needed for the post list.
        return {
            id: item.id.toString(),            // Converts the post ID from a number to a string.
            title: item.title,            // Keeps the post title.
            date: item.date            // Keeps the post date.
        }
    });
}

// Returns the IDs of all posts in the format required by getStaticPaths.
export function getAllPostIds() {
    const jsonObj = getPostsData();

    console.log(jsonObj);    // Displays the posts in the console for debugging.
    return jsonObj.map(item => {    // Creates an array of route parameters for each post.
        return {
            params: {
                id: item.id.toString()    // Converts the post ID to a string for the dynamic route.
            }
        }
    });
}

// Returns the data for one specific post based on its ID.
export function getPostData(id) {
    const jsonObj = getPostsData();

    const objReturned = jsonObj.filter(obj => {    // Finds the post whose ID matches the requested ID.
        return obj.id.toString() === id;
    });
        if (objReturned.length === 0) {    // Checks if no post was found with the requested ID.
            return {        // Returns default values when the post does not exist.
                id: id,
                title: 'Not found',
                date: '',
                contentHtml: 'Not found'
            }
        } else {        // Returns the first matching post.
            return objReturned[0];
        }
}