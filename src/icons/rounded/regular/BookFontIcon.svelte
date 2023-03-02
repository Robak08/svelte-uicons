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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H7C4.24 0 2 2.24 2 5v15c0 2.21 1.79 4 4 4h11c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm3 5v11H8V2h9c1.65 0 3 1.35 3 3ZM6 2.18V16c-.73 0-1.41.21-2 .56V5c0-1.3.84-2.4 2-2.82ZM17 22H6c-1.1 0-2-.9-2-2s.9-2 2-2h14v1c0 1.65-1.35 3-3 3Zm-6.21-8c.42 0 .8-.27.94-.66l.48-1.34h3.59l.48 1.34c.14.4.52.66.94.66.69 0 1.17-.68.94-1.34l-2.74-7.69c-.22-.6-.77-.99-1.41-.99s-1.19.39-1.41 1l-2.74 7.69c-.23.65.25 1.34.94 1.34Zm4.3-4h-2.16l1.08-3.03L15.09 10Z"/></svg>
  