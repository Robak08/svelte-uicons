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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.449 9.627a2.013 2.013 0 0 0-1.87-.587c-.214.043-.423.1-.629.156a10.829 10.829 0 0 0-7.1-5.032 2.5 2.5 0 1 0-3.7 0A10.829 10.829 0 0 0 3.051 9.2a8.023 8.023 0 0 0-.629-.156 2.012 2.012 0 0 0-1.87.587 1.991 1.991 0 0 0-.484 1.886l2.9 10.493A1 1 0 0 0 3 24h18a1 1 0 0 0 .03-1.994l2.907-10.515a1.984 1.984 0 0 0-.488-1.864ZM12 6a8.516 8.516 0 0 1 7.087 4.005 6.854 6.854 0 0 0-2 1.807 6 6 0 0 0-10.163 0 6.841 6.841 0 0 0-2-1.807A8.516 8.516 0 0 1 12 6Zm6.958 16H5.045L2.026 11C4 11.4 6 12.9 6 15a1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 1 0 2 0c0-2.1 2-3.6 4-4.021Z"/></svg>
  