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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 5a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1Zm6 .72v10.457a5 5 0 0 1-1.326 3.39l1.25 3.054a1 1 0 1 1-1.852.757L18 20.745A13.573 13.573 0 0 1 12 22a13.583 13.583 0 0 1-6-1.255l-1.073 2.633a1 1 0 1 1-1.851-.757l1.249-3.054A5 5 0 0 1 3 16.177V5.72A4.982 4.982 0 0 1 6.475.956 18.367 18.367 0 0 1 12 0a18.329 18.329 0 0 1 5.525.957A4.979 4.979 0 0 1 21 5.72Zm-2 6.017C17.447 14.065 15.05 16 12 16s-5.447-1.935-7-4.263v4.44a2.958 2.958 0 0 0 1.512 2.607A11.331 11.331 0 0 0 12 20a11.321 11.321 0 0 0 5.487-1.216A2.957 2.957 0 0 0 19 16.177ZM19 6v-.28a2.988 2.988 0 0 0-2.083-2.858A16.364 16.364 0 0 0 12 2a16.4 16.4 0 0 0-4.917.861A2.99 2.99 0 0 0 5 5.72V6c0 2.443 2.645 8 7 8s7-5.557 7-8Zm-7 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"/></svg>
  