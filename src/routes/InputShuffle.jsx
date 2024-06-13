import { useEffect, useState } from "react";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function InputShuffle() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry", "Date"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFruits((prevFruits) => shuffleArray([...prevFruits]));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl">Avec value key</h1>
      <div className="grid grid-cols-2 gap-6">
        {fruits.map((fruit) => (
          <input
            key={fruit}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={fruit}
          />
        ))}
      </div>
      <h1 className="text-center text-2xl">Sans index key</h1>
      <div className="grid grid-cols-2 gap-6">
        {fruits.map((fruit, index) => (
          <input
            key={index}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={fruit + " " + index}
          />
        ))}
      </div>
      <h1 className="text-center text-2xl">Sans key</h1>
      <div className="grid grid-cols-2 gap-6">
        {fruits.map((fruit) => (
          // eslint-disable-next-line react/jsx-key
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={fruit}
          />
        ))}
      </div>
    </div>
  );
}
