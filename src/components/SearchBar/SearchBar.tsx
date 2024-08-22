function SearchBar() {
  return (
    <div className="relative hidden md:flex items-center justify-center gap-3">
      <i
        className="bx bx-search
            absolute left-24   text-2xl text-gray-500"
      ></i>
      <input
        type="text"
        placeholder="Pesquisar"
        className="py-2 pl-10 ml-20 rounded-xl border-2 border-[#515839] focus:bg-[#e5eacb75] focus:outline-[#515839] transition-all duration-[.15s]"
      />
    </div>
  );
}
export default SearchBar;
