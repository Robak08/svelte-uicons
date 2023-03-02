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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24c-7.851 0-12-1.383-12-4s4.149-4 12-4c7.963 0 12 1.346 12 4s-4.037 4-12 4zm.5-9C4.648 15 3 12.825 3 11s1.648-4 9.5-4c5.948 0 9.5 1.495 9.5 4s-3.552 4-9.5 4zM10 6C6.355 6 4 4.822 4 3s2.355-3 6-3 6 1.178 6 3-2.355 3-6 3z"/></svg>
  