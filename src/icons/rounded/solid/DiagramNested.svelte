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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.5 14h-3c-1.93 0-3.5 1.57-3.5 3.5v.5H9c-1.65 0-3-1.35-3-3v-5h.5C8.43 10 10 8.43 10 6.5v-3C10 1.57 8.43 0 6.5 0h-3C1.57 0 0 1.57 0 3.5v3C0 8.43 1.57 10 3.5 10H4v5c0 2.76 2.24 5 5 5h5v.5c0 1.93 1.57 3.5 3.5 3.5h3c1.93 0 3.5-1.57 3.5-3.5v-3c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>
  