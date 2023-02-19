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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-people-pants {customClass}"><path d="M2.5 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM10 10v3a4 4 0 0 1-2 3.46V23c0 .55-.45 1-1 1s-1-.45-1-1v-6H4v6c0 .55-.45 1-1 1s-1-.45-1-1v-6.54C.81 15.77 0 14.47 0 13v-3c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4Zm-2 0c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3Zm11-5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm5 5v3a4 4 0 0 1-2 3.46V23c0 .55-.45 1-1 1s-1-.45-1-1v-6h-2v6c0 .55-.45 1-1 1s-1-.45-1-1v-6.54c-1.19-.69-2-1.99-2-3.46v-3c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4Zm-2 0c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3Z"/></svg>
  