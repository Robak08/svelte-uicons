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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 17a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm6 0v1a6.006 6.006 0 0 1-6 6H8a6.006 6.006 0 0 1-6-6v-1a8.942 8.942 0 0 1 4.928-8h10.144A8.942 8.942 0 0 1 22 17zm-4 0a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 0 3-3zM17 6a2 2 0 0 0-2-2V2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v1h10z"/></svg>
  