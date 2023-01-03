import { useMemo, useDeferredValue, useEffect } from "react";
function DeferredValueExampleList({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const a = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      a.push(<div key={i}>{deferredInput}</div>);
    }
    return a;
  }, [deferredInput]);
  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);
  return list;
}
export default DeferredValueExampleList;
