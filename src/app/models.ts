export interface LoginData {
  username: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
}

export interface PostData {
  post_content: string;
  image_bytes: string;
}

export interface User {
  user_id: string;
  username: string;
  email: string;
  password: string;
}

export interface Profile {
  profile_id: string;
  user_id: string;
  display_name: string;
  status_message: string;
  user_location: string;
  profile_img: string;
}

export interface Post {
  postId: string;
  userId: string;
  postDate: Date;
  postContent: string;
  imageUrl: string;
}
