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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4C1.794 0 0 1.794 0 4v12c0 2.206 1.794 4 4 4h2.923l3.748 3.156c.382.34.862.509 1.338.509.467 0 .931-.163 1.292-.485L17.148 20H20c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4ZM7.293 10.71l2.583 2.583a.999.999 0 1 1-1.414 1.414l-2.583-2.583a3.003 3.003 0 0 1 0-4.243l2.583-2.583a.999.999 0 1 1 1.414 1.414L7.293 9.295a1.002 1.002 0 0 0 0 1.415Zm10.828 1.414-2.583 2.583a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.583-2.583c.39-.391.39-1.024 0-1.415l-2.583-2.583a.999.999 0 1 1 1.414-1.414l2.583 2.583a3.003 3.003 0 0 1 0 4.243Z"/></svg>
  