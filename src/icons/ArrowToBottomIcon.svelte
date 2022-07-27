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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-to-bottom {customClass}"><path d="M18 22h-4.517a2.492 2.492 0 0 0 .285-.232l4.95-4.95A1 1 0 0 0 17.3 15.4L13 19.7V1.031a1 1 0 0 0-2 0v18.676L6.7 15.4a1 1 0 0 0-1.414 1.414l4.95 4.95a2.492 2.492 0 0 0 .285.232H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z"/></svg>
  