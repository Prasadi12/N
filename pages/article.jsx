import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Article = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-3xl font-bold">Title of the Article</h1>
          <p className="mt-3 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed lorem vitae ante mattis fermentum.
          </p>
          <div className="mt-5">
            {/* <img className="rounded-lg" src="https://via.placeholder.com/800x400" alt="Article" /> */}
          </div>
          <div className="mt-5 text-left max-w-2xl">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed lorem vitae ante mattis fermentum. Vivamus accumsan purus in
              dolor vehicula efficitur. Integer elementum mauris id volutpat
              scelerisque.
            </p>
            <p className="text-xl mt-4">
              Fusce sit amet risus pulvinar, ultrices turpis vitae, cursus
              risus. Sed lobortis magna in metus mattis, sit amet tempor odio
              ultricies.
            </p>
          </div>
          <div className="mt-8 max-w-md">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full border rounded-l-lg py-2 px-4"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
              >
                Comment
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
