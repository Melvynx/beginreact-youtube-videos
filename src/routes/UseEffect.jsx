import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <FetchUser />
      <hr />
      <FetchUser />
    </div>
  );
}

const FetchUser = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {error ? <p>{error.message}</p> : null}
    </div>
  );
};
