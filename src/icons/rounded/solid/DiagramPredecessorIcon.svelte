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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18v2c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4ZM0 6V4c0-2.21 1.79-4 4-4h6c1.86 0 3.43 1.28 3.87 3H17c2.21 0 4 1.79 4 4v1h1.45c.69 0 1.04.83.55 1.32l-2.45 2.45c-.3.3-.79.3-1.1 0L17 9.32c-.49-.49-.14-1.32.55-1.32H19V7c0-1.1-.9-2-2-2h-3v1c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4Zm12 0V4.41L8.41 8H10c1.1 0 2-.9 2-2Zm-2-4H8.41l-5.6 5.61c.33.25.75.39 1.19.39h1.59l5.6-5.61C10.86 2.14 10.44 2 10 2ZM2 4v1.59L5.59 2H4c-1.1 0-2 .9-2 2Z"/></svg>
  