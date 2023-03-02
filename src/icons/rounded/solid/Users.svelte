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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.5 13A4.5 4.5 0 1 1 12 8.5 4.505 4.505 0 0 1 7.5 13zM14 24H1a1 1 0 0 1-1-1v-.5a7.5 7.5 0 0 1 15 0v.5a1 1 0 0 1-1 1zm3.5-15A4.5 4.5 0 1 1 22 4.5 4.505 4.505 0 0 1 17.5 9zm-1.421 2.021a6.825 6.825 0 0 0-4.67 2.831A9.537 9.537 0 0 1 16.323 19H23a1 1 0 0 0 1-1v-.038a7.008 7.008 0 0 0-7.921-6.941z"/></svg>
  