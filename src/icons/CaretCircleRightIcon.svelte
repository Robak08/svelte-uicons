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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-caret-circle-right {customClass}"><path d="M24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12ZM2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm9.6 5.731 5.154-5.087a.9.9 0 0 0 0-1.288L11.6 6.269a.924.924 0 0 0-1.575.644v10.174a.924.924 0 0 0 1.575.644Z"/></svg>
  