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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diagram-cells {customClass}"><path d="M20 10H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v2c0 2.21-1.79 4-4 4ZM4 2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4Zm16 22H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v2c0 2.21-1.79 4-4 4ZM4 16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H4Z"/></svg>
  