import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Nav />
      </div>
    </header>
  );
}