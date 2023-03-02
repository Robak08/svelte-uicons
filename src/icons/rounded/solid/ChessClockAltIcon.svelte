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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 10v6a5 5 0 0 0 3 4.576V22a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 16v-6a5.006 5.006 0 0 0-5-5V3h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v2H8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0-5 5Zm17 3.5a1 1 0 0 0-1-1h-2.837a3.5 3.5 0 1 1 0 2H16a1 1 0 0 0 1-1Zm-9.146-.354a1 1 0 0 0-1.415 0l-2.006 2.007a3.5 3.5 0 1 1 1.414 1.414l2.007-2.006a1 1 0 0 0 0-1.415Z"/></svg>
  