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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.548 10.038-4.111-5.9A5 5 0 0 0 12.335 2H12a3 3 0 0 0-3 3v5H4a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2v.5a3.5 3.5 0 0 0 7 0V18h6v.5a3.5 3.5 0 0 0 7 0V18a2 2 0 0 0 2-2v-2a4 4 0 0 0-3.452-3.962ZM11 5a1 1 0 0 1 1-1h.335A3 3 0 0 1 14.8 5.284L18.084 10H11ZM7 18.5a1.5 1.5 0 0 1-3 0V18h3Zm13 0a1.5 1.5 0 0 1-3 0V18h3Zm2-2.5H2v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"/></svg>
  