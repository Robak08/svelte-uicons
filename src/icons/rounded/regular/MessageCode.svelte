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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.831 15a.999.999 0 0 1-.707-1.707l2.583-2.583c.39-.391.39-1.024 0-1.415l-2.583-2.583a.999.999 0 1 1 1.414-1.414l2.583 2.583a3.003 3.003 0 0 1 0 4.243l-2.583 2.583a.997.997 0 0 1-.707.293Zm-4.954-.293a.999.999 0 0 0 0-1.414L7.294 10.71a1.002 1.002 0 0 1 0-1.415l2.583-2.583a.999.999 0 1 0-1.414-1.414L5.88 7.881a3.003 3.003 0 0 0 0 4.243l2.583 2.583a.997.997 0 0 0 1.414 0Zm3.425 8.473L17.149 20h2.852c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4H4C1.794 0 0 1.794 0 4v12c0 2.206 1.794 4 4 4h2.923l3.748 3.156c.382.34.862.509 1.338.509.467 0 .931-.163 1.292-.485ZM20 2c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2h-3.211c-.232 0-.458.081-.637.229l-4.172 3.415-4.047-3.409A.997.997 0 0 0 7.289 18H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h16Z"/></svg>
  