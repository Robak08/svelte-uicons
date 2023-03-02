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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.395 16.061A4.955 4.955 0 0 0 0 17.025V5A5 5 0 0 1 4 .1V16H3a3 3 0 0 0-.605.061ZM18 10c.691 0 1.361.088 2 .252V5a5 5 0 0 0-5-5H6v16h4.252c.888-3.45 4.02-6 7.748-6Zm-8 8H3a3 3 0 1 0 0 6h9.709A7.98 7.98 0 0 1 10 18Zm14 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-3.002-1.242-1.5-1.5A.878.878 0 0 0 18 15.88v1.121h-3a1 1 0 1 0 0 2h3v1.121a.879.879 0 0 0 1.498.622l1.5-1.5a1.76 1.76 0 0 0 0-2.485Z"/></svg>
  