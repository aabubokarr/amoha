import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#0049FF] text-white">
      {" "}
      {/* Background glow */}{" "}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />{" "}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-950/30 blur-3xl" />{" "}
      {/* Subtle grid */}{" "}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />{" "}
      {/* Decorative dots */}{" "}
      <div className="pointer-events-none absolute inset-0">
        {" "}
        <span className="absolute left-[8%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-white/80" />{" "}
        <span className="absolute right-[12%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />{" "}
        <span className="absolute bottom-[20%] left-[15%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />{" "}
        <span className="absolute bottom-[15%] right-[18%] h-2 w-2 animate-pulse rounded-full bg-white/60" />{" "}
        <span className="absolute left-[50%] top-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />{" "}
      </div>{" "}
      {/* Main content */}{" "}
      <main className="relative z-10 flex h-full items-center justify-center px-6 py-8 sm:py-12">
        {" "}
        <div className="w-full max-w-3xl text-center">
          {" "}
          {/* 404 */}{" "}
          <div className="relative mb-6 sm:mb-8">
            {" "}
            <h1 className=" select-none text-[clamp(8rem,27vw,18rem)] font-black leading-[0.8] tracking-[-0.08em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] ">
              {" "}
              404{" "}
            </h1>{" "}
            {/* Glow behind 404 */}{" "}
            <div className="absolute inset-0 -z-10 mx-auto h-40 max-w-lg rounded-full bg-white/20 blur-[90px] sm:h-52" />{" "}
          </div>{" "}
          {/* Badge */}{" "}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl sm:mb-6 sm:text-sm">
            {" "}
            <span className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />{" "}
            Page not found{" "}
          </div>{" "}
          {/* Heading */}{" "}
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {" "}
            Oops! This page{" "}
            <span className="text-blue-100"> doesn't exist. </span>{" "}
          </h2>{" "}
          {/* Description */}{" "}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100/90 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            {" "}
            The page you're looking for may have been moved, deleted, or perhaps
            the URL isn't quite right.{" "}
          </p>{" "}
          {/* Actions */}{" "}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            {" "}
            {/* Back to Home */}{" "}
            <Link
              to="/"
              className=" group inline-flex h-12 w-full max-w-[220px] items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-bold text-[#0049FF] shadow-xl shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto "
            >
              {" "}
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                {" "}
                ←{" "}
              </span>{" "}
              Back to Home{" "}
            </Link>{" "}
            {/* Go Back */}{" "}
            <button
              type="button"
              onClick={() => window.history.back()}
              className=" inline-flex h-12 w-full max-w-[220px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto "
            >
              {" "}
              Go Back{" "}
            </button>{" "}
          </div>{" "}
          {/* Footer */}{" "}
          <p className="mt-7 text-[11px] font-medium text-blue-100/60 sm:mt-10 sm:text-xs">
            {" "}
            Error 404 • Page unavailable{" "}
          </p>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
};
