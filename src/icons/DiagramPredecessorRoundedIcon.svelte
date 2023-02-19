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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diagram-predecessor {customClass}"><path d="M20 14H4c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4Zm2 6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2ZM4 10h6c2.21 0 4-1.79 4-4V5h3c1.1 0 2 .9 2 2v1h-1.45c-.69 0-1.04.83-.55 1.32l2.45 2.45c.3.3.79.3 1.1 0L23 9.32c.49-.49.14-1.32-.55-1.32H21V7c0-2.21-1.79-4-4-4h-3.13c-.45-1.72-2.01-3-3.87-3H4C1.79 0 0 1.79 0 4v2c0 2.21 1.79 4 4 4Zm6-2H8.41L12 4.41V6c0 1.1-.9 2-2 2Zm1.19-5.61L5.58 8H3.99c-.45 0-.86-.15-1.19-.39L8.41 2H10c.45 0 .86.15 1.19.39ZM4 2h1.59L2 5.59V4c0-1.1.9-2 2-2Z"/></svg>
  