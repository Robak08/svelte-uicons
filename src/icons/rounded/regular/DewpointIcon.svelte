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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 24A10.048 10.048 0 0 1 0 14C0 8.663 6.5 1.751 6.771 1.459A4.286 4.286 0 0 1 10.006 0a4.306 4.306 0 0 1 3.266 1.5c2.771 3.023 11 12.486 3.8 19.573A9.934 9.934 0 0 1 10 24Zm.006-22a2.312 2.312 0 0 0-1.752.8C8.161 2.9 2 9.459 2 14c-.115 7.009 8.783 10.694 13.657 5.657 6.218-6.007-1.944-14.6-3.866-16.819A2.342 2.342 0 0 0 10.007 2ZM21 6a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  