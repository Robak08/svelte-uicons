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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 12V6c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v6h-3v-1c0-2.206-1.794-4-4-4h-2c-1.2 0-2.266.542-3 1.382A3.975 3.975 0 0 0 9 7H7c-2.206 0-4 1.794-4 4v1H0Zm9-3H7c-1.103 0-2 .897-2 2v1h6v-1c0-1.103-.897-2-2-2Zm10 2c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v1h6v-1ZM0 14v6a1 1 0 1 0 2 0v-2h20v2a1 1 0 1 0 2 0v-6H0Z"/></svg>
  