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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19v1.5c0 1.93-1.57 3.5-3.5 3.5S16 22.43 16 20.5V19h7Zm-7.127-2h7.172c.078-.86.247-1.546.424-2.257.261-1.042.53-2.12.53-3.743 0-7.383-4.331-9-6-9-2.408 0-5 2.19-5 7 0 1.736.816 3.369 1.605 4.947.531 1.063 1.04 2.082 1.268 3.053ZM.955 15h7.172c.228-.971.737-1.99 1.268-3.053C10.184 10.368 11 8.736 11 7c0-4.81-2.592-7-5-7-1.669 0-6 1.617-6 9 0 1.623.27 2.701.53 3.743.178.712.347 1.397.424 2.257ZM1 17v1.5C1 20.43 2.57 22 4.5 22S8 20.43 8 18.5V17H1Z"/></svg>
  