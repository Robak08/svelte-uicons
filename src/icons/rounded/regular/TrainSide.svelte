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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.99 15H1a1 1 0 0 0 0 2h18.99a4 4 0 0 0 3.825-5.193A13.939 13.939 0 0 0 10.455 2H1a1 1 0 0 0 0 2h3v3H1a1 1 0 0 0 0 2h19.213a12.048 12.048 0 0 1 1.694 3.406 1.969 1.969 0 0 1-.3 1.773A1.992 1.992 0 0 1 19.99 15ZM9 7H6V4h3Zm2 0V4.022A11.952 11.952 0 0 1 18.407 7ZM23 20H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
  