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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.1 19.5a1.5 1.5 0 0 1-1.061-2.561l4.586-4.585a.5.5 0 0 0 0-.708l-4.582-4.585a1.5 1.5 0 0 1 2.121-2.122l4.586 4.586a3.505 3.505 0 0 1 0 4.95l-4.586 4.586a1.5 1.5 0 0 1-1.064.439Z"/><path d="M6.1 19.5a1.5 1.5 0 0 1-1.061-2.561L9.982 12 5.043 7.061a1.5 1.5 0 0 1 2.121-2.122l6 6a1.5 1.5 0 0 1 0 2.122l-6 6A1.5 1.5 0 0 1 6.1 19.5Z"/></svg>
  