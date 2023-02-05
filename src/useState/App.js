export default function App() {
  const [count, setCount] = React.useState(0);
  const inc = (amount) => setCount((prev) => prev + amount);
  const reset = () => setCount(() => 0);

  return (
    <div className="pt-4 bg-zinc-200 mx-auto h-full min-w-min max-w-md px-2 pb-96 flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold leading-tight	">React</h1>
      <p className="text-sm leading-tight	">Counter example</p>
      <span
        className="text-slate-600 bg-slate-300 px-4 rounded shadow cursor-default hover:scale-110"
        onClick={reset}
      >
        {count}
      </span>
      <div className="text-xs">
        <button
          className="bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-zinc-400"
          onClick={() => inc(-10)}
        >
          -10
        </button>
        <button
          className="bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-zinc-400"
          onClick={() => inc(-1)}
        >
          -1
        </button>
        <button
          className="bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-rose-200 hover:text-rose-900 hover:border-rose-800"
          onClick={reset}
        >
          reset
        </button>
        <button
          className="bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-zinc-400"
          onClick={() => inc(1)}
        >
          +1
        </button>
        <button
          className="bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-zinc-400"
          onClick={() => inc(10)}
        >
          +10
        </button>
      </div>
    </div>
  );
}
