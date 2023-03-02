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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.971 6.578a1.993 1.993 0 0 1 2.711.111l.475.479 4.962-4.994A4.994 4.994 0 0 0 19-.001h-6c-2.757 0-5 2.243-5 5v4c0 1.057.334 2.035.896 2.843l6.075-5.265Zm-3.484-4.463a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001ZM24 5v4c0 2.757-2.243 5-5 5h-6a4.95 4.95 0 0 1-2.646-.775l5.909-5.126.476.48a2.004 2.004 0 0 0 2.83-.002l4.351-4.374c.042.261.081.524.081.797Zm-7 11a1 1 0 0 0-1 1v1h-2v-1c0-.558-.455-.999-1.012-1a6.995 6.995 0 0 1-6.764-5.27.983.983 0 0 0-.958-.73H4.5A4.5 4.5 0 0 0 0 14.5v5A4.5 4.5 0 0 0 4.5 24h9a4.5 4.5 0 0 0 4.5-4.5V17a1 1 0 0 0-1-1ZM2 16h2v2H2v-2Zm2-3.95V14H2.055c.2-.977.968-1.75 1.945-1.95ZM2.055 20H4v1.95A2.503 2.503 0 0 1 2.055 20ZM14 21.949V20h1.945c-.2.977-.968 1.75-1.945 1.949Z"/></svg>
  