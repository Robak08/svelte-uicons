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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a12 12 0 1 0-12 12 12.013 12.013 0 0 0 12-12Zm-11.6 5.731-5.15-5.087a.9.9 0 0 1 0-1.288l5.15-5.087a.924.924 0 0 1 1.575.644v10.174a.924.924 0 0 1-1.575.644Z"/></svg>
  