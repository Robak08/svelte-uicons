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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 15c0-2.248-1.378-4.605-3.016-6.619l-5.216 6.26a1 1 0 1 1-1.536-1.282l5.416-6.5a36.111 36.111 0 0 0-3.5-3.228 2 2 0 1 0-2.341-.031C8.814 4.987 3 9.511 3 15a8.983 8.983 0 0 0 3.356 7H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-1.355A8.985 8.985 0 0 0 21 15Z"/></svg>
  