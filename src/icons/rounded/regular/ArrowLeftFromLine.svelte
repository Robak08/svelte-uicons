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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 1v22c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1Zm-5 10H2.58l4.14-4.31a.996.996 0 1 0-1.44-1.38L.88 9.88C.31 10.45 0 11.2 0 12s.31 1.55.87 2.11l4.41 4.59c.2.2.46.31.72.31s.5-.09.69-.28c.4-.38.41-1.02.03-1.41L2.58 13H19c.55 0 1-.45 1-1s-.45-1-1-1Z"/></svg>
  