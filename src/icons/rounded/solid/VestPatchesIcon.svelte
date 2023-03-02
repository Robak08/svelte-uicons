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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 5.065V8c0 .561-.408 1.473-1.12 2.504a4.95 4.95 0 0 0-.88 2.83V19c0 2.757 2.243 5 5 5h5V12.179L6.611.265A4.976 4.976 0 0 0 3 5.066ZM6.5 20a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 20ZM8 13v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1ZM15.352.008 12 9.107 8.648.008C8.858 0 8.989 0 9 0h6c.011 0 .142 0 .352.008Zm6.768 10.495C21.408 9.472 21 8.56 21 7.999V5.064A4.977 4.977 0 0 0 17.389.263L13 12.177v11.821h5c2.757 0 5-2.243 5-5v-5.666a4.948 4.948 0 0 0-.88-2.83Zm-2.683 4.496h-2.795a.561.561 0 0 1-.467-.873l1.17-1.755a.835.835 0 0 1 1.39 0l1.17 1.755a.562.562 0 0 1-.467.873Z"/></svg>
  