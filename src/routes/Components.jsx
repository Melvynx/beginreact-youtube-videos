function ShoeCard(props) {
  console.log(props);

  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <figure>
        <img
          className="h-32 w-full object-cover"
          src={props.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h2 className="card-title">
            {props.id} {props.title}
          </h2>
          {Boolean(props.isNew) && (
            <div className="badge badge-primary">new</div>
          )}
        </div>
      </div>
    </div>
  );
}

const SHOES = [
  {
    image: "/images/shoes-1.png",
    isNew: 0,
    title: "Requin",
    id: 1,
  },
  {
    image: "/images/shoes-2.png",
    isNew: 1,
    title: "Basket",
    id: 2,
  },
  {
    image: "/images/shoes-3.png",
    title: "Test",
    id: 3,
  },
];

export default function Components() {
  return (
    <div className="flex flex-col items-start gap-4">
      {SHOES.map((shoe) => {
        return <ShoeCard key={shoe.id} {...shoe} />;
      })}
    </div>
  );
}
