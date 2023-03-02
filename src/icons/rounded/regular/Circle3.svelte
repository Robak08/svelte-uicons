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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm4-8c0 2.206-1.794 4-4 4H9a1 1 0 1 1 0-2h3c1.103 0 2-.897 2-2s-.897-2-2-2h-2a1 1 0 1 1 0-2h2a1.001 1.001 0 0 0 0-2H9a1 1 0 1 1 0-2h3c1.654 0 3 1.346 3 3 0 .68-.236 1.301-.619 1.805A3.984 3.984 0 0 1 16 14Z"/></svg>
  