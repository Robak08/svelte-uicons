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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.3 9.49-3.48-6A5.005 5.005 0 0 0 15.5 1H8.49c-1.78 0-3.43.95-4.32 2.49l-3.49 6c-.9 1.55-.9 3.47 0 5.02l3.48 6A5.005 5.005 0 0 0 8.48 23h7.01c1.78 0 3.43-.95 4.32-2.49l3.48-6c.9-1.55.9-3.47 0-5.02Zm-1.73 4.02-3.48 6c-.54.92-1.53 1.49-2.59 1.49H8.49a2.99 2.99 0 0 1-2.59-1.49l-3.48-6c-.54-.93-.54-2.08 0-3.01l3.48-6c.54-.92 1.53-1.49 2.59-1.49h7.01c1.06 0 2.06.57 2.59 1.49l3.48 6c.54.93.54 2.08 0 3.01ZM16.01 13l-2.28-3.99A2.006 2.006 0 0 0 12 6a2.006 2.006 0 0 0-1.73 3.01L7.99 13C6.89 13 6 13.9 6 15s.9 2 2 2c.74 0 1.39-.4 1.73-1h4.54c.35.6.99 1 1.73 1 1.1 0 2-.9 2-2s-.89-1.99-1.99-2Zm-6.28.99L12 10.01l2.27 3.98H9.73Z"/></svg>
  