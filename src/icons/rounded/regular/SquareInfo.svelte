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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 20c-.55 0-1-.45-1-1v-6c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1c1.65 0 3 1.35 3 3v6c0 .55-.45 1-1 1ZM12 5c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5Zm12 14V5c0-2.76-2.24-5-5-5H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5ZM19 2c1.65 0 3 1.35 3 3v14c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h14Z"/></svg>
  