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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-note {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h11.646a4.787 4.787 0 0 0 3.407-1.411l2.536-2.536A4.85 4.85 0 0 0 24 16.646V5c0-2.757-2.243-5-5-5ZM2 19V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v10h-4c-1.654 0-3 1.346-3 3v4H5c-1.654 0-3-1.346-3-3Zm16.639 2.175a2.794 2.794 0 0 1-1.639.802V18c0-.552.449-1 1-1h3.976a2.839 2.839 0 0 1-.802 1.639l-2.536 2.536ZM5 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 6.5ZM8 12a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 12Zm0 5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 17.5Z"/></svg>
  