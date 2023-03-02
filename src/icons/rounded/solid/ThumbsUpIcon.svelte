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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.773 7.721A4.994 4.994 0 0 0 19 6h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L8 5.417V21h10.3a5.024 5.024 0 0 0 4.951-4.3l.705-5a4.994 4.994 0 0 0-1.183-3.979ZM0 11v5a5.006 5.006 0 0 0 5 5h1V6H5a5.006 5.006 0 0 0-5 5Z"/></svg>
  