import { Rabbit } from "lucide-react";

export default function NotFound() {
  return (
    <div role="alert" className="alert alert-error">
      <Rabbit size={32} />
      <span>404! Not found</span>
    </div>
  );
}
