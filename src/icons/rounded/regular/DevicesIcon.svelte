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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 17v4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1h3v-2H5c-2.76 0-5-2.24-5-5V6c0-2.76 2.24-5 5-5h12c2.76 0 5 2.24 5 5 0 .55-.45 1-1 1s-1-.45-1-1c0-1.65-1.35-3-3-3H5C3.35 3 2 4.35 2 6v7c0 1.65 1.35 3 3 3h6c.55 0 1 .45 1 1Zm12-4v7c0 2.21-1.79 4-4 4h-2c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4Zm-2 0c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7Z"/></svg>
  