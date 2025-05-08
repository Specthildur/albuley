export default function Details({ data }) {
  return (
    <>
      {data.map((el, i) => {
        return (
          <li key={i} className="mb-2">
            <p>{el.title}</p>
          </li>
        );
      })}
    </>
  );
}
