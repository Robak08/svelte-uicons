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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.5 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM6 6H4c-2.21 0-4 1.79-4 4v3a4 4 0 0 0 2 3.46V23c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6.54c1.19-.69 2-1.99 2-3.46v-3c0-2.21-1.79-4-4-4Zm13-1a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm1 1h-2c-2.21 0-4 1.79-4 4v3a4 4 0 0 0 2 3.46V23c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6.54c1.19-.69 2-1.99 2-3.46v-3c0-2.21-1.79-4-4-4Z"/></svg>
  