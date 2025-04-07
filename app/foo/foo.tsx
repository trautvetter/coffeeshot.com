import {getFoo} from "@/app/db";

export default async function Foo() {
  const foo = await getFoo();

  return (
    <div>
      <h2>Foo Data:</h2>
      <ul>
        {foo.map((row, idx) => (
          <li key={idx}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}