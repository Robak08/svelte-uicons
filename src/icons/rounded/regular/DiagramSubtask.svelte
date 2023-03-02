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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4H4C1.79 0 0 1.79 0 4v2c0 2.21 1.79 4 4 4v5c0 2.76 2.24 5 5 5h1c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4h-6c-2.21 0-4 1.79-4 4H9c-1.65 0-3-1.35-3-3v-5h14Zm-8 8c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-2ZM2 6V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2Z"/></svg>
  