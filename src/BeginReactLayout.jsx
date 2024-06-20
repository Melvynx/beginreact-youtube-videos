export const BeginReactLayout = ({ children }) => {
  return (
    <div className="m-auto flex  min-h-full max-w-2xl flex-col gap-8 p-4">
      <header className="sticky top-4 z-50 flex items-center gap-2 rounded-full border border-neutral-content/20 bg-neutral px-4 py-2 shadow-md">
        <img className="size-8" src="/beginreact.png" />
        <a href="/" className="text-base font-bold">
          BeginReact
        </a>
        <p className="ml-auto text-sm">
          Exercice gratuit →{" "}
          <a href="/beginreact" className="text-primary underline">
            mlv.sh/react
          </a>
        </p>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};
