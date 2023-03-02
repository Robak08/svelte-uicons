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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.8 4.293a1 1 0 0 0-1.41 1.414 8.911 8.911 0 0 1 0 12.586 1 1 0 1 0 1.41 1.414 10.911 10.911 0 0 0 0-15.414Z"/><path d="M18.093 7.293a1 1 0 1 0-1.414 1.414 4.664 4.664 0 0 1 0 6.586 1 1 0 1 0 1.414 1.414 6.665 6.665 0 0 0 0-9.414ZM13.819.207A12.055 12.055 0 0 0 6.268 5H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h1.269a12.051 12.051 0 0 0 7.55 4.793A1 1 0 0 0 15 22.81V1.19a1 1 0 0 0-1.181-.983Z"/></svg>
  