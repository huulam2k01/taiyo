import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post"][0...12]{
  _id, title, slug
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const TEACHERS_QUERY = groq`*[_type == "teacher"][0...12]{
  _id, name, image, bio
}`;
export const COURSES_QUERY = groq`*[_type == "course"][0...12]{
  _id, name, image
}`;
export const CENTER_QUERY = groq`*[_type == "center"][0]{
  _id, name, tel, address, email
}`;

// Run this each time your schema types or GROQ queries change
// npx sanity@latest typegen generate