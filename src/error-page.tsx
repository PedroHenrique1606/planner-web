import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-100"
    >
      <h1 className="text-6xl mb-4">Oops!</h1>
      <p className="text-2xl mb-8">Desculpas, um erro inesperado ocorreu!</p>
      <button
        type="submit"
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-150"
      >
        <a href="/">Voltar para a Home</a>
      </button>
    </div>
  );
};

export default ErrorPage;
