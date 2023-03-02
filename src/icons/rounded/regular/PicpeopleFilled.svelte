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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.24 2 0 4.24 0 7v10c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Zm3 15c0 1.65-1.35 3-3 3h-1.35a5.99 5.99 0 0 0-11.3 0H5c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v10Zm-6-7c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Z"/></svg>
  