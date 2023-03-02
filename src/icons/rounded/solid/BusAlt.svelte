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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 16h4v1a4.98 4.98 0 0 1-2 3.975v.525a2.5 2.5 0 0 1-4.949.5h-6.1A2.5 2.5 0 0 1 4 21.5v-.525A4.98 4.98 0 0 1 2 17v-1h4v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0ZM9 3h6a1 1 0 0 1 1 1h5.479A5.9 5.9 0 0 0 17.4.584a25.374 25.374 0 0 0-10.8 0A5.9 5.9 0 0 0 2.521 4H8a1 1 0 0 1 1-1Zm13 6V6.42c0-.143-.026-.279-.035-.42H2.035c-.009.141-.035.277-.035.42V9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"/></svg>
  