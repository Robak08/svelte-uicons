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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.818 7.1A4.782 4.782 0 0 0 20 4.078V3a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1.078c-3.776.457-5.682 5.347-2 6.79V18a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6v-7.13a2.91 2.91 0 0 0 1.818-3.77ZM20 18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7.139c.895-.068 1.658-1.313 2.556-.7a4.058 4.058 0 0 0 4.889 0 .947.947 0 0 1 1.111 0 4.058 4.058 0 0 0 4.889 0c.9-.619 1.658.627 2.555.7Zm1.831-9.346c-.37.618-1.556.281-2.052-.07a2.945 2.945 0 0 0-3.557 0 2.03 2.03 0 0 1-2.443 0 2.945 2.945 0 0 0-3.557 0 2.03 2.03 0 0 1-2.443 0 2.945 2.945 0 0 0-3.557 0c-.84.616-2.535.654-2.165-.791A2.86 2.86 0 0 1 5 6h10a1 1 0 0 0 0-2H6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1c2.217.008 3.413 1.651 2.831 2.654Z"/></svg>
  