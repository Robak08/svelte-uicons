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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2h-9C7.24 2 5 4.24 5 7v6c0 2.76 2.24 5 5 5h9c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Zm-9 2h9c1.3 0 2.4.84 2.82 2H7.18C7.59 4.84 8.69 4 10 4Zm9 12h-9c-1.65 0-3-1.35-3-3V8h15v5c0 1.65-1.35 3-3 3Zm-2 5c0 .55-.45 1-1 1H5c-2.76 0-5-2.24-5-5V9.65c0-1.22.44-2.39 1.25-3.31.37-.41 1-.45 1.41-.09.42.37.45 1 .09 1.41C2.27 8.21 2 8.91 2 9.64v7.35c0 1.65 1.35 3 3 3h11c.55 0 1 .45 1 1Z"/></svg>
  