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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-circle-heart {customClass}"><path d="M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12Zm0-22C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 15.84c-.5 0-.99-.16-1.4-.49-2.1-1.69-4.6-4.2-4.6-6.6C6 8.68 7.57 7 9.5 7c.98 0 1.86.43 2.5 1.13.64-.7 1.52-1.13 2.5-1.13 1.93 0 3.5 1.68 3.5 3.75 0 2.41-2.5 4.92-4.6 6.6-.41.33-.9.49-1.4.49ZM9.5 9C8.67 9 8 9.79 8 10.75c0 1.2 1.48 3.14 3.85 5.04.09.07.21.07.3 0 2.37-1.91 3.85-3.84 3.85-5.04C16 9.79 15.33 9 14.5 9s-1.5.79-1.5 1.75c0 .55-.45 1-1 1s-1-.45-1-1C11 9.79 10.33 9 9.5 9Z"/></svg>
  