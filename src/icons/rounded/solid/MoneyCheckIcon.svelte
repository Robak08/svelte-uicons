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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM4 11h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm16 6H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Zm1-6c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v2Zm-2-2v2h-4V9h4Z"/></svg>
  