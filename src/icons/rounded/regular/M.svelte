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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24a1 1 0 0 1-1-1V3.486c0-.861-.587-1.306-1.137-1.436-.548-.13-1.273.006-1.658.776l-6.311 12.621c-.339.678-1.45.678-1.789 0l-6.31-12.62c-.385-.771-1.109-.906-1.659-.776C2.587 2.181 2 2.626 2 3.487V23c-.006 1.308-1.995 1.307-2 0V3.486C0 1.841 1.076.482 2.677.104c1.601-.379 3.171.357 3.907 1.828L12 12.764l5.416-10.832C18.151.46 19.723-.277 21.323.104 22.924.482 24 1.841 24 3.486V23a1 1 0 0 1-1 1Z"/></svg>
  