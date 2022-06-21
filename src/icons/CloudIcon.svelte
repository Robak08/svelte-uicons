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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cloud {customClass}"><path d="M17.792 7.212A8 8 0 0 0 2 9a7.915 7.915 0 0 0 .9 3.671A5.49 5.49 0 0 0 5.5 23H16a8 8 0 0 0 1.792-15.788ZM16 21H5.5a3.491 3.491 0 0 1-.872-6.874 1 1 0 0 0 .554-1.564A5.936 5.936 0 0 1 4 9a6 6 0 0 1 11.94-.8 1 1 0 0 0 .858.86A6 6 0 0 1 16 21Z"/></svg>
  