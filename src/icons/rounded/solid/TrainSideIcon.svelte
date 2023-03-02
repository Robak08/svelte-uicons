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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 22H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2ZM12 2.094V6h8.267A13.926 13.926 0 0 0 12 2.094ZM6 2v4h4V2Zm15.949 6H0v8a1 1 0 0 0 1 1h18.99a4 4 0 0 0 3.825-5.193A14.05 14.05 0 0 0 21.949 8ZM4 6V2H1a1 1 0 0 0-1 1v3Z"/></svg>
  