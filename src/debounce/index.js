function useDebounce(delay = 500, initialState = "") {
  const [state, setState] = React.useState(initialState);
  const [debounced, setDebounced] = React.useState("");
  const [isDebouncing, setDebouncing] = React.useState(false);

  React.useEffect(() => {
    setDebouncing(() => true);
    const timer = setTimeout(() => {
      setDebounced(state);
      setDebouncing(() => false);
    }, delay);

    return () => clearTimeout(timer);
  }, [state]);

  return [state, setState, debounced, isDebouncing];
};

function Debounce({ delay = 500, initialText = "" }) {
  const [inputText, setInputText, debouncedText, isDebouncing] = useDebounce(delay, initialText)

  return(
    <div className="flex flex-col gap-2">

      <label className="flex flex-col" htmlFor="input-text">
        <span className="ml-1">Input text:</span>
        <input
          className="rounded h-8 pl-2 border-2 border-zinc-400/50"
          placeholder="type some text"
          type="text"
          id="input-text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </label>

      <div className="flex flex-col" htmlFor="output-text">
          <div
            className={`flex h-8 items-center  block  align-text-bottom rounded px-1.5 border-2 border-zinc-400/50 ${isDebouncing ? "bg-orange-200" : "bg-green-200"}`}
            id="output-text"
          >{debouncedText}</div>
        <span className="text-sm text-zinc-500 ">Debounced text with <b>{delay}</b> ms delay</span>
      </div>

    </div>
  )
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mt-6 mx-auto flex justify-center items-center">
    <div className="bg-zinc-200 max-w-md p-6 flex rounded-xl flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold leading-tight">React</h1>
      <p className="text font-bold leading-tight">Debounce</p>
      <Debounce delay="1000" initialText="Hello"/>
    </div>
  </div>
);
