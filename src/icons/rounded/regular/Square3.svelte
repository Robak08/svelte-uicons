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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 14c0 2.206-1.794 4-4 4H9a1 1 0 1 1 0-2h3c1.103 0 2-.897 2-2s-.897-2-2-2h-2a1 1 0 1 1 0-2h2a1.001 1.001 0 0 0 0-2H9a1 1 0 1 1 0-2h3c1.654 0 3 1.346 3 3 0 .68-.236 1.301-.619 1.805A3.984 3.984 0 0 1 16 14Zm8-9v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5Z"/></svg>
  