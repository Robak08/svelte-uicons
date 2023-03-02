<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.999 8a3.98 3.98 0 0 0-1.6-3.205 3.934 3.934 0 0 0-3.481-.644c-.857.248-1.848.349-3.418.349-1.366 0-2.639-.347-3.987-.715C10.098 3.399 8.634 3 7 3c-1.159 0-2.427.259-3.768.771A5.041 5.041 0 0 0-.002 8.452V16a3.98 3.98 0 0 0 1.601 3.205 3.933 3.933 0 0 0 3.481.644c.857-.248 1.849-.349 3.42-.349 1.366 0 2.639.347 3.985.715 1.415.386 2.879.785 4.513.785 1.159 0 2.427-.259 3.768-.771A5.04 5.04 0 0 0 24 15.548V8ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm9 6a1 1 0 1 1-2 0v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414l2-2A.998.998 0 0 1 14 9v6Zm5 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  