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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7Zm2.772 8.425-1.317 2.639a1 1 0 1 1-1.789-.893l1.083-2.172h-2.134c-.509 0-.993-.244-1.297-.652a1.623 1.623 0 0 1-.249-1.43l1.751-3.278a.998.998 0 1 1 1.758.944l-1.304 2.416h2.121c.592 0 1.133.324 1.412.845a1.6 1.6 0 0 1-.035 1.581ZM9.517 12H.337c.022-.081.036-.164.065-.244l2.702-7.427a5.013 5.013 0 0 1 4.698-3.291h8.396a5.012 5.012 0 0 1 4.698 3.292l2.208 6.07A8.957 8.957 0 0 0 17 8a8.99 8.99 0 0 0-7.482 4Zm-.571 9H6.999v1a2 2 0 1 1-4 0v-1.424a5.003 5.003 0 0 1-3-4.576v-1.962H4v2a1 1 0 1 0 2 0V14h2.523A8.956 8.956 0 0 0 8 17c0 1.439.346 2.794.947 4Z"/></svg>
  