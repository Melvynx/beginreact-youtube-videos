export default function BeginReact() {
  return (
    <div>
      <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
        <figure>
          <img src="/beginreact-courses.png" alt="BeginReact view" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pratique sur BeginReact 🚀</h2>
          <p>
            La théorie c'est bien, la pratique c'est <b>encore mieux !</b>{" "}
            Profite de plusieurs exercices sur ma plateforme Codeline.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-lg">mlv.sh/react</button>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img
              className="h-40 w-full object-cover"
              src="/beginreact-draw.png"
              alt="BeginReact view"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Des dessins pour tout comprendre</h2>
            <p>
              Ma pédagogie simple et efficace illustre les concepts les plus
              avancés de React avec des dessins.
            </p>
          </div>
        </div>
        <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img
              className="h-40 w-full object-cover"
              src="/beginreact-playground.png"
              alt="BeginReact view"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pratique sans quitter ma plateforme</h2>
            <p>
              Des playgrounds dynamiques et complexes sont disponibles pour
              pratiquer sans quitter ma plateforme.
            </p>
          </div>
        </div>
        <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img
              className="h-40 w-full object-cover"
              src="/beginreact-quiz.png"
              alt="BeginReact view"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Test sans limite !</h2>
            <p>
              Des centaines de quiz sont disponibles pour tester tes
              connaissances et s'assurer que tu as bien compris.
            </p>
          </div>
        </div>
        <div className="card w-full border border-neutral-content/50 bg-neutral text-neutral-content shadow-xl">
          <figure>
            <img
              className="h-40 w-full object-cover"
              src="/beginreact-videos.png"
              alt="BeginReact view"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Des vidéos courtes (max 10m)</h2>
            <p>
              Les vidéos sont courtes et vont à l'essentiel pour te faire gagner
              du temps et apprendre plus vite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
