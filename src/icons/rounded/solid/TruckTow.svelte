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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11v1h-8V8c0-1.103.897-2 2-2h1c2.757 0 5 2.243 5 5Zm-8 8h5a3 3 0 0 0 3-3v-2h-8v5ZM3.5-.051H3a1 1 0 0 0-1 1v5.5a.5.5 0 0 1-.5.5H1a1 1 0 0 0 0 2h.5a2.5 2.5 0 0 0 2.5-2.5V3.111L11.408 12H2.5A2.5 2.5 0 0 0 0 14.5v2A2.5 2.5 0 0 0 2.5 19H14v-7.013L4.268.309a1 1 0 0 0-.768-.36ZM3.058 21a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 1 0 5 0c0-.172-.024-.338-.058-.5H3.058Zm13 0a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 1 0 5 0c0-.172-.024-.338-.058-.5h-4.885Z"/></svg>
  