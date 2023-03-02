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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 14a4.929 4.929 0 0 0-2.352.615L13.3 10.6l7.467-8.96A1 1 0 0 0 19.231.36L12 9.038 4.768.36a1 1 0 0 0-1.536 1.28L10.7 10.6l-3.348 4.015A4.941 4.941 0 0 0 5 14a5 5 0 1 0 5 5 4.947 4.947 0 0 0-1.112-3.1L12 12.162l3.111 3.738A4.955 4.955 0 0 0 14 19a5 5 0 1 0 5-5zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></svg>
  