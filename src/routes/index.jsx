import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <LinkCard url="components" />
      <LinkCard url="usestate" />
      <LinkCard url="useeffect" />
      <LinkCard url="useid" />
    </div>
  );
}

const LinkCard = ({ url }) => {
  return (
    <Link to={`/${url}`}>
      <div className="card w-full bg-neutral text-neutral-content shadow-xl transition hover:bg-neutral/80">
        <div className="card-body">
          <h2 className="card-title">{url}</h2>
        </div>
      </div>
    </Link>
  );
};
