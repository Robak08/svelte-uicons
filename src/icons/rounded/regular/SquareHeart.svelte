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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5v14c0 2.76-2.24 5-5 5ZM5 2C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3H5Zm7 15.84c-.5 0-1-.16-1.4-.49-2.1-1.68-4.6-4.2-4.6-6.6C6 8.68 7.57 7 9.5 7c.98 0 1.86.43 2.5 1.13.64-.7 1.52-1.13 2.5-1.13 1.93 0 3.5 1.68 3.5 3.75 0 2.41-2.5 4.92-4.6 6.6-.41.33-.9.49-1.4.49ZM9.5 9C8.67 9 8 9.79 8 10.75c0 1.2 1.48 3.14 3.85 5.04.09.07.21.07.3 0 2.38-1.91 3.85-3.84 3.85-5.04C16 9.79 15.33 9 14.5 9s-1.5.79-1.5 1.75c0 .55-.45 1-1 1s-1-.45-1-1C11 9.79 10.33 9 9.5 9Z"/></svg>
  