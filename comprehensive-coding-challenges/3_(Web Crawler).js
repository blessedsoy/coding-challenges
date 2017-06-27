// Question C -- Web Crawler: I wrote a crawler that visits web pages, 
// stores a few keywords in a database, and follows links to other web pages. 
// I noticed that my crawler was wasting a lot of time visiting the same pages over and over,
//  so I made a set, visited, where I'm storing URLs I've already visited. 
//  Now the crawler only visits a URL if it hasn't already been visited. 
//  Let’s see if we can make this crawler use less memory. 
//  See if you can come up with a data structure better than a hash that just stores the entire URL. 
//  how can we trim down the amount of space taken up by visited? 
//  Explain in words and implement your solution.


_________________________________________________________________________________________________

// I would use a hash(hash function) that stores the hash of the URL. 
// A hash function maps data of arbitrary size to data of fixed size, 
// and it returns the same output for the same input. So in this case, 
// it can reduce the size of data for a long URL efficently and 
// can be used for the set that is made for checking visited URLs.
// Below is the hash function that converts a string of URL to a 32-bit integer.


const hashUrl = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++){
    hash = ((hash << 5) - hash + str[i].charCodeAt(0)) << 0;
  }
  return hash
}

hashUrl("https://www.nytimes.com/2017/06/26/world/australia/indigenous-australia-through-american-eyes.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news")

// this returns 2118327462
