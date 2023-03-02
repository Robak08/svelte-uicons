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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H5c-2.76 0-5-2.24-5-5V1c0-.55.45-1 1-1s1 .45 1 1v18c0 1.65 1.35 3 3 3h18c.55 0 1 .45 1 1s-.45 1-1 1Zm1-7V1c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1Zm-5-7V5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1Zm-5 4V9c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1Zm-5 4v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1Z"/></svg>
  