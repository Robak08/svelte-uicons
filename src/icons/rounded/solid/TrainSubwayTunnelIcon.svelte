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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 8h2v5H6v-2c0-1.654 1.346-3 3-3Zm9 5v-2c0-1.654-1.346-3-3-3h-2v5h5Zm-1.56 11-1.837-3H9.398L7.56 24h8.88ZM12 0C5.383 0 0 5.383 0 12v11a1 1 0 0 0 1 1h4.215l1.902-3.106A4.001 4.001 0 0 1 4 17v-6c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v6a4 4 0 0 1-3.117 3.894L18.785 24H23a1 1 0 0 0 1-1V12c0-6.617-5.383-12-12-12ZM8 19h8c1.103 0 2-.897 2-2v-2h-2v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H6v2c0 1.103.897 2 2 2Z"/></svg>
  