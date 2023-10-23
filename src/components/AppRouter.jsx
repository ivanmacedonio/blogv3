import { Posts } from "../pages/Posts";
import { CreatePost } from "../pages/CreatePost";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostDetail } from "../pages/PostDetail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts></Posts>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/create" element={<CreatePost></CreatePost>} />
        <Route path="/postdetail/:id" element={<PostDetail></PostDetail>} />
        <Route path="/profile/:id" element={<Profile></Profile>} />
      </Routes>
    </>
  );
};
