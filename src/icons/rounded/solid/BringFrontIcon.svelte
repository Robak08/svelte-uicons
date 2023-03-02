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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 18h-4c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4ZM4 10c0-3.31 2.69-6 6-6 .58 0 1-.56.84-1.12A4.002 4.002 0 0 0 7 0H4C1.79 0 0 1.79 0 4v3c0 1.82 1.22 3.36 2.88 3.84A.878.878 0 0 0 4 10Zm16 4c0 3.31-2.69 6-6 6-.58 0-1 .56-.84 1.12A4.002 4.002 0 0 0 17 24h3c2.21 0 4-1.79 4-4v-3c0-1.82-1.22-3.36-2.88-3.84A.878.878 0 0 0 20 14Z"/></svg>
  