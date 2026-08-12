import React from "react";
import { Helmet, HelmetData } from "react-helmet-async";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  const helmetData = new HelmetData({});
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {" "}
      {/* Background gradients */}{" "}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />{" "}
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />{" "}
      {/* Grid background */}{" "}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />{" "}
      {/* Stars */}{" "}
      <div className="absolute inset-0 pointer-events-none">
        {" "}
        <span className="absolute left-[10%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-white/70" />{" "}
        <span className="absolute right-[15%] top-[25%] h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:500ms]" />{" "}
        <span className="absolute left-[18%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:1000ms]" />{" "}
        <span className="absolute right-[10%] bottom-[18%] h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:1500ms]" />{" "}
        <span className="absolute left-[50%] top-[12%] h-1 w-1 animate-pulse rounded-full bg-indigo-300/70 [animation-delay:700ms]" />{" "}
      </div>{" "}
      {/* Main content */}{" "}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        {" "}
        <div className="w-full max-w-3xl text-center">
          {" "}
          {/* 404 */}{" "}
          <div className="relative mb-8">
            {" "}
            <h1 className=" select-none text-[clamp(9rem,28vw,18rem)] font-black leading-none tracking-[-0.08em] text-transparent bg-gradient-to-br from-white via-indigo-300 to-purple-500 bg-clip-text drop-shadow-[0_20px_50px_rgba(99,102,241,0.25)] ">
              {" "}
              404{" "}
            </h1>{" "}
            {/* Decorative glow */}{" "}
            <div className="absolute inset-0 -z-10 mx-auto h-48 max-w-md rounded-full bg-indigo-500/20 blur-[100px]" />{" "}
          </div>{" "}
          {/* Badge */}{" "}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-200 shadow-lg shadow-black/10 backdrop-blur-xl">
            {" "}
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />{" "}
            Page not found{" "}
          </div>{" "}
          {/* Heading */}{" "}
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {" "}
            Lost in the{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              digital space?{" "}
            </span>{" "}
          </h2>{" "}
          {/* Description */}{" "}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            {" "}
            The page you're looking for doesn't exist, has been moved, or might
            have taken a little vacation.{" "}
          </p>{" "}
          {/* Buttons */}{" "}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {" "}
            {/* Home */}{" "}
            <Link
              to="/"
              className=" group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 "
            >
              {" "}
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                {" "}
                ←{" "}
              </span>{" "}
              Back to Home{" "}
            </Link>{" "}
            {/* Browser back */}{" "}
            <button
              onClick={() => window.history.back()}
              className=" inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 "
            >
              {" "}
              Go Back{" "}
            </button>{" "}
          </div>{" "}
          {/* Small footer message */}{" "}
          <p className="mt-10 text-xs text-slate-600">
            {" "}
            Error code: 404 • Nothing to see here{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
