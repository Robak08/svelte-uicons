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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 21H5c-2.757 0-5-2.243-5-5v-.922a1 1 0 0 1 1.082-.997c1.106-.021 2-.928 2-2.04s-.894-2.02-2-2.041a1 1 0 0 1-1.081-.997V7.999A5.004 5.004 0 0 1 5 3h14c2.757 0 5 2.243 5 5v1a1 1 0 0 1-1 1c-1.103 0-2 .897-2 2s.897 2 2 2a1 1 0 0 1 1 1v1c0 2.757-2.243 5-5 5Z"/></svg>
  