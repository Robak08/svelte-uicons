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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.122 13A2.881 2.881 0 0 0 24 10.122a5.13 5.13 0 0 0-2.106-4.137L15.009.979a5.1 5.1 0 0 0-6.018 0L2.106 5.985A5.13 5.13 0 0 0 0 10.122 2.881 2.881 0 0 0 2.878 13H11v10a1 1 0 0 0 2 0V13ZM15.5 8.075a2.986 2.986 0 0 1 .5 1.659V11h-3V4.313Zm5.218-.475A3.124 3.124 0 0 1 22 10.122a.879.879 0 0 1-.878.878H18V9.734a4.983 4.983 0 0 0-.835-2.766l-2.5-3.77ZM2 10.122A3.124 3.124 0 0 1 3.282 7.6l6.057-4.4-2.5 3.77A4.983 4.983 0 0 0 6 9.734V11H2.878A.879.879 0 0 1 2 10.122ZM8 11V9.734a2.986 2.986 0 0 1 .5-1.659L11 4.313V11ZM4 19H2v-3a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0v-2h2a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0-3-3ZM23 15a1 1 0 0 0-1 1v3h-2a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h2v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z"/></svg>
  