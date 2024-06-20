export default function Videos() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-2xl">
        Série Masterclass React sur{" "}
        <span className="font-extrabold text-red-400 underline">YouTube</span>
      </h1>
      <p className="text-center">
        Playlist sur{" "}
        <a className="text-primary underline" href="https://mlv.sh/react-p">
          mlv.sh/react-p
        </a>
      </p>
      <p className="text-center">
        Repo GitHub sur{" "}
        <a className="text-primary underline" href="https://mlv.sh/ytr">
          mlv.sh/react-gh
        </a>
      </p>
      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            React #1 : JSX - ReactDOM et Components
          </h2>
          <p>
            Maîtrise les bases de React avec ce premier cours qui te permettra
            de comprendre le JSX, ReactDOM et les Components.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/react-1</button>
          </div>
        </div>
      </div>

      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">React #2 : UseState</h2>
          <p>
            useState est le hook le plus utilisé en React. Il permet de gérer
            l'état d'un composant React.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/react-2</button>
          </div>
        </div>
      </div>

      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            React #3 : UseEffect + Fetch de données + SWR
          </h2>
          <p>
            useEffect est trop utilisé car il est mal compris, il faut vraiment
            qu'on résolve ce problème.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/react-3</button>
          </div>
        </div>
      </div>

      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">React #4 : UseContext + Zustand</h2>
          <p>
            useContext ne permet PAS de gérer des states globaux. Comme ça c'est
            dit.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/react-4</button>
          </div>
        </div>
      </div>

      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">React #5 : Hooks + Render</h2>
          <p>
            Plusieurs hooks permettent d'optimiser les renders de vos
            composants. On va les voir ensemble.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/ytr5</button>
          </div>
        </div>
      </div>
    </div>
  );
}
