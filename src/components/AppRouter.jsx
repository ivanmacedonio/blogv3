import { Posts } from "../components/Posts";
import { CreatePost } from "../components/CreatePost";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostDetail } from "../components/PostDetail";
import { Login } from "../components/Login";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../components/Register";
import { Profile } from "../components/Profile";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts></Posts>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/create" element={<CreatePost></CreatePost>} />
        <Route path="/postdetail/:id" element={<PostDetail></PostDetail>} />
        <Route path="/profile/:id" element={<Profile></Profile>} />
      </Routes>
    </>
  );
};
