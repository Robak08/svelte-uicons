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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tram {customClass}"><path d="M19 9h-7V2.948A2 2 0 1 0 10 5v4H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5Zm3 5v2h-5v-5h2a3 3 0 0 1 3 3ZM9 11h6v5H9Zm-4 0h2v5H2v-2a3 3 0 0 1 3-3Zm14 11H5a3 3 0 0 1-3-3v-1h20v1a3 3 0 0 1-3 3ZM13 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Zm6.016-.276a1 1 0 0 1 .805-1.162l3-.546a1 1 0 0 1 .358 1.968l-3 .545a1 1 0 0 1-1.163-.805Zm-19 3.455a1 1 0 0 1 .805-1.163l4-.727a1 1 0 0 1 .358 1.968l-4 .727a1 1 0 0 1-1.163-.805Z"/></svg>
  