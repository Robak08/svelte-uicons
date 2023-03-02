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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.474 17a3.541 3.541 0 0 0-.475.032V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v11.279l-2.734.912a3 3 0 0 0-.156-1l-1.553-5.1a3.007 3.007 0 0 0-3.768-1.949l-6.7 2.13A3.013 3.013 0 0 0 1.129 15l1.634 5.373a2.966 2.966 0 0 0 .457.831l-2.536.845a1 1 0 0 0 .632 1.9l16.267-5.422A3.5 3.5 0 1 0 20.474 17ZM8.888 13.65l-2.465.784a1 1 0 0 1-.606-1.906l2.465-.784a1 1 0 1 1 .606 1.906Z"/></svg>
  