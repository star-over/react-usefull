function MyButton({children, handle, css="" }) {
  return (
    <button
      className={`bg-zinc-300 px-2 rounded border border-zinc-500 hover:bg-zinc-400 ${css}`}
      onClick={handle}
    >{children}</button>
  )
}

function Counter({ initial = 0 }) {
  const [count, setCount] = React.useState(initial);

  return (
    <div className="text-xs flex gap-1">
      <span className="text-slate-600 bg-slate-300 p-1 rounded shadow cursor-default">
        {count}
      </span>
      <MyButton handle={() => setCount((prev) => prev - 10)}>-10</MyButton>
      <MyButton handle={() => setCount((prev) => prev - 1)}>-1</MyButton>
      <MyButton handle={() => setCount(0)} css="hover:bg-rose-200 hover:text-rose-900 hover:border-rose-800">reset</MyButton>
      <MyButton handle={() => setCount((prev) => prev + 1)}>+1</MyButton>
      <MyButton handle={() => setCount((prev) => prev + 10)}>+10</MyButton>
    </div>
  )
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mt-6 mx-auto flex justify-center items-center">
    <div className="bg-zinc-200 p-6 flex rounded-xl flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold leading-tight">React</h1>
      <p className="text-sm leading-tight">Counter example</p>
      <Counter />
      <Counter initial={5}/>
      <Counter initial={-1}/>
    </div>
  </div>
);
