function useMemoFactory() {
  let lastDeps = [];
  let lastResult;
  let isFirstRun = true;

  return function useMemo(callback, deps) {
    const isChanged = isFirstRun || deps.some((dep, index) => dep !== lastDeps[index]);    

    if(isChanged) {
        isFirstRun = false
        lastResult = callback()
        lastDeps = deps;
    }

    return lastResult

  };
}

const useMemo = useMemoFactory();

let count = 0;

console.log(useMemo(() => ++count, [1]));  // 1 (new deps)
console.log(useMemo(() => ++count, [1]));  // 1 (same deps)
console.log(useMemo(() => ++count, [2]));  // 2 (deps changed)

