import React from "react";
import { Post } from "../interfaces/post";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li className="rounded-md overflow-hidden shadow-2xl bg-gray-50 flex flex-col">
      <div className="flex flex-col h-full">
        <img
          src={post.fields.image_url}
          className="h-40 w-full object-scale-down mt-4"
          alt={`Cover Image for ${post.fields.title}`}
        />

        {/* Conteúdo do Card */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h2 className="font-bold text-lg line-clamp-2 min-h-[3rem]">
            {post.fields.title}
          </h2>
          <p className="text-xs text-start text-gray-500">
            {post.fields.date
              ? new Date(post.fields.date).toLocaleDateString()
              : "No date available"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
