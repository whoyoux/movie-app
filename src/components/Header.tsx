"use client";

const Header = () => {
  const toggleTheme = () => {
    console.log("toggleTheme");
  };
  return (
    <header className="w-full p-6 md:p-8 font-medium text-2xl border-b border-b-zinc-800 flex justify-between h-full items-center">
      <h1 className="text-2xl">MovieDB</h1>
      {/* <button
        className="text-xl grid place-content-center bg-zinc-800 p-2 rounded"
        onClick={toggleTheme}
      >
        theme
      </button> */}
    </header>
  );
};

export default Header;
