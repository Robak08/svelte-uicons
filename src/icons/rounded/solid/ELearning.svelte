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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 7.938V3.173c0-1.2.634-3.167 3.673-3.167A8.613 8.613 0 0 1 8.856.1 2.975 2.975 0 0 1 11 2.948v7.925a4 4 0 0 0 2 0V2.948A2.975 2.975 0 0 1 15.144.1a8.613 8.613 0 0 1 1.183-.09C19.366.006 20 1.973 20 3.173v4.765a4.014 4.014 0 0 1-2.9 3.845l-3.451.987a6.019 6.019 0 0 1-3.3 0L6.9 11.783A4.014 4.014 0 0 1 4 7.938zm18-3.912v3.912a6.022 6.022 0 0 1-4.353 5.768l-3.449.986a8 8 0 0 1-4.394 0l-3.452-.987A6.023 6.023 0 0 1 2 7.938V4.026A4.977 4.977 0 0 0 0 8v7a5.006 5.006 0 0 0 5 5h6v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h6a5.006 5.006 0 0 0 5-5V8a4.977 4.977 0 0 0-2-3.974z"/></svg>
  