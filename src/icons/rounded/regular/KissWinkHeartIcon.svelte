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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.867 19.964c-.537 1.514-3.066 2.561-4.292 2.988a.875.875 0 0 1-1.045-.4c-.666-1.151-1.938-3.651-1.4-5.166a1.876 1.876 0 0 1 2.366-1.28 1.991 1.991 0 0 1 1 2.569 1.878 1.878 0 0 1 2.366-1.281 1.994 1.994 0 0 1 1.005 2.57Zm-8.935 1.6a10 10 0 1 1 6.8-7.267 1 1 0 0 0 1.948.457A12 12 0 1 0 0 12a12.06 12.06 0 0 0 15.518 11.476 1 1 0 0 0-.586-1.913ZM18 10a2 2 0 0 0-4 0c0 1 .895 1 2 1s2 0 2-1Zm-7 0a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Zm4 4.5a2.5 2.5 0 0 0-2.5-2.5h-1.731a1 1 0 0 0 0 2H12.5a.5.5 0 0 1 0 1H12a1 1 0 0 0 0 2h.5a.5.5 0 0 1 0 1h-1.731a1 1 0 0 0 0 2H12.5a2.507 2.507 0 0 0 1.987-4A2.471 2.471 0 0 0 15 14.5Z"/></svg>
  