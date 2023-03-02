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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.484 20a1 1 0 0 1-.77-1.637 10.052 10.052 0 0 0 0-12.726 1 1 0 0 1 1.543-1.274 12.068 12.068 0 0 1 0 15.274 1 1 0 0 1-.773.363Zm-16.333-.229a1 1 0 0 0 .135-1.408 10.052 10.052 0 0 1 0-12.726 1 1 0 0 0-1.542-1.274 12.065 12.065 0 0 0 0 15.274 1 1 0 0 0 1.407.134ZM20 12a8.009 8.009 0 0 1-8 8C1.412 19.624 1.415 4.374 12 4a8.009 8.009 0 0 1 8 8Zm-7 4a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm0-8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z"/></svg>
  