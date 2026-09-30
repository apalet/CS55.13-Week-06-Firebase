// Import firebase app instance from firebase.js
import { firebaseDB } from './firebase'; // load from firebase.js in same directory
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';

// async: function that returns a promise
// Returns all posts sorted alphabetically by title.
export async function getSortedPostsData() {
    const collectionRef = collection(firebaseDB, 'posts'); // get a reference to the posts collection
    const querySnapshot = await getDocs(collectionRef); // get all documents in the collection
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
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
export async function getAllPostIds() {
    const collectionRef = collection(firebaseDB, 'posts'); 
    const querySnapshot = await getDocs(collectionRef);
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id}));

    return jsonObj.map(item => {    // Creates an array of route parameters for each post.
        return {
            params: {
                id: item.id.toString()    // Converts the post ID to a string for the dynamic route.
            }
        }
    });
}

// Returns the data for one specific post based on its ID.
export async function getPostData(id) {
    const collectionRef = collection(firebaseDB, 'posts'); 
    // create a query to search for the post with the given ID
    const searchQuery = query(
        collectionRef,
        where(documentId(), '==', id)
    );
    const querySnapshot = await getDocs(searchQuery);
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    if (jsonObj.length === 0) {
        return {
            id: id,
            title: 'Not found',
            date: '',
            contentHtml: 'Not found'
        }
    } else {
        return jsonObj[0];
    }
}