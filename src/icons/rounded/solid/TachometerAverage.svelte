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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052C8.353-5.659-6.712 9.5 3.138 21.081a2.318 2.318 0 0 0 3.962-.465c.347-.519.682-1.687 1.486-1.616h6.824c.8-.074 1.161 1.129 1.5 1.646A2.367 2.367 0 0 0 19 22a2.734 2.734 0 0 0 1.814-.867A12.058 12.058 0 0 0 20 4.052ZM12 15a2.008 2.008 0 0 1-1-3.732V6a1 1 0 0 1 2 0v5.268A2.008 2.008 0 0 1 12 15Z"/></svg>
  