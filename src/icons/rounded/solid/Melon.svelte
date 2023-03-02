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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.6 12.175 12.173 4.6l.667.667c3.891 5.027-2.6 11.479-7.6 7.557Zm17.774-9.851A4.336 4.336 0 0 0 15.5 1.273l-1.914 1.911c7.306 7.128-3.286 17.7-10.4 10.405L1.274 15.5a4.347 4.347 0 0 0-1.215 3.742c.718 3.917 5.816 4.606 9.038 4.765 10.877.158 18.425-11.959 13.277-21.683Z"/></svg>
  