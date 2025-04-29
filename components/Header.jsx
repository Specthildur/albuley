export default function Header() {
  return (
    <header className="mb-4">
      <div className="flex border-b-2 border-b-gray-400 pb-4 pt-5 h-full px-5 items-center font-medium">
        <div className="w-2/7">
          <p className="text-lg">Logo</p>
        </div>
        <div className="w-4/7 flex">
          <input
            placeholder="Search for your favourite album!"
            className="p-2 border-2 rounded-md focus:outline-0 border-transparent focus:border-stone-600 hover:border-2 hover:border-stone-600 hover:rounded-md w-[50%] transition-all"
          />
        </div>
        <div className="w-1/6 flex grow content-stretch">
          <div className="grow">My Albums</div>
          <div className="grow">Log Out</div>
        </div>
      </div>
    </header>
  );
}
