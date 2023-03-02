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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 22v1a1 1 0 0 1-2 0v-1a1 1 0 0 0-1-1H2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0v3h2a3 3 0 0 1 3 3Zm16-7a1 1 0 0 0-1 1v3h-2a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h2v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-1.106-9.015L14.869.979a4.979 4.979 0 0 0-2.823-.97.981.981 0 0 1 .74.4c.009.005 5.32 6.479 5.32 6.479A5.024 5.024 0 0 1 19 9.734V10a1 1 0 0 1-2 0v-.266a2.986 2.986 0 0 0-.5-1.659L13 3.8V10a1 1 0 0 1-2 0V3.8L7.442 8.154A2.974 2.974 0 0 0 7 9.734V10a1 1 0 0 1-2 0v-.266a4.983 4.983 0 0 1 .835-2.766S11.2.414 11.217.406A.981.981 0 0 1 12 0a5.083 5.083 0 0 0-2.921.963L2.106 5.985A5.13 5.13 0 0 0 0 10.122 2.881 2.881 0 0 0 2.878 13H11v10a1 1 0 0 0 2 0V13h8.122A2.881 2.881 0 0 0 24 10.122a5.13 5.13 0 0 0-2.106-4.137Z"/></svg>
  