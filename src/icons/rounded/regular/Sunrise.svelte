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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 12a1 1 0 0 1 1-1h4.079a6.819 6.819 0 0 1 .434-1.6L1.982 7.349a1 1 0 1 1 1-1.731l3.535 2.048a7.083 7.083 0 0 1 1.151-1.145l-2.05-3.537a1 1 0 0 1 1.731-1L9.4 5.513A6.9 6.9 0 0 1 11 5.08V1a1 1 0 0 1 2 0v4.08a6.9 6.9 0 0 1 1.6.433l2.047-3.532a1 1 0 0 1 1.731 1l-2.05 3.536a7.164 7.164 0 0 1 1.152 1.144l3.531-2.047a1 1 0 0 1 1 1.731L18.49 9.394a6.947 6.947 0 0 1 .441 1.614L23 11a1 1 0 0 1 0 2h-4.078a2 2 0 0 1-1.972-1.711 5.009 5.009 0 0 0-9.9 0A2 2 0 0 1 5.079 13H1a1 1 0 0 1-1-1Zm23.744 4.565a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.489A4.174 4.174 0 0 0 6 17.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Zm0 5a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.499A4.174 4.174 0 0 0 6 22.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Z"/></svg>
  