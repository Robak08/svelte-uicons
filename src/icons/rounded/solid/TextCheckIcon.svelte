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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.107 14.447a1 1 0 1 0 1.789-.894l-5.5-11a1 1 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 11h5.764ZM4.619 9 6.5 5.236 8.383 9Z"/><path d="M23.707 11.293a1 1 0 0 0-1.414 0L13 20.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l10-10a1 1 0 0 0 0-1.414Z"/></svg>
  