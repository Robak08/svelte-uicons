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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 7.126V7a7.008 7.008 0 0 0-7-7H8a7.008 7.008 0 0 0-7 7v6.868a7.958 7.958 0 0 0 1.45 4.593l.55.785V20a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-.641l.513-.487A8.033 8.033 0 0 0 23 13.075V11a4.008 4.008 0 0 0-3-3.874ZM16 22H7a2 2 0 0 1-2-2h13a2 2 0 0 1-2 2Zm5-8.925a6.027 6.027 0 0 1-1.866 4.348l-.607.577H4.569l-.482-.687A5.975 5.975 0 0 1 3 13.868v-3.405A3.98 3.98 0 0 0 5 11h7a1 1 0 0 0 0-2H5a2 2 0 0 1-2-2 5.006 5.006 0 0 1 5-5h5a5.006 5.006 0 0 1 5 5v.126A4.008 4.008 0 0 0 15 11v3a1 1 0 0 0 2 0v-3a2 2 0 0 1 4 0Z"/></svg>
  