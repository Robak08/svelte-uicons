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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 5.97 16.08 9h-2.16L15 5.97ZM5 16h1V.1A5 5 0 0 0 2 5v12.02c.7-.53 1.53-.86 2.4-.96.2-.04.4-.06.6-.06Zm-3 5c0 1.66 1.34 3 3 3h12c2.76 0 5-2.24 5-5v-1H5c-1.66 0-3 1.34-3 3ZM22 5v11H8V0h9c2.76 0 5 2.24 5 5Zm-2.84 6.66-2.74-7.69c-.22-.6-.77-.99-1.41-.99s-1.19.39-1.41 1l-2.74 7.69c-.23.65.25 1.34.94 1.34.42 0 .8-.27.94-.66l.48-1.34h3.59l.48 1.34c.14.4.52.66.94.66.69 0 1.17-.68.94-1.34Z"/></svg>
  