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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 9.424V8a3.014 3.014 0 0 0-3.167-3L13.164.986a1.18 1.18 0 0 0-2.328 0L10.167 5A3.014 3.014 0 0 0 7 8v1.424A5 5 0 0 0 4 14v5a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-5a5 5 0 0 0-3-4.576ZM9 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9Zm9 11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3Zm-3.026-5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-4v-2h4Z"/></svg>
  