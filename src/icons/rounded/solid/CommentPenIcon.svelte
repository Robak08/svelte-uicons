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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.707 8.293c.189.188.293.439.293.707s-.104.518-.293.707L10 15.414c-.378.378-.88.586-1.414.586H8v-.586c0-.526.214-1.042.586-1.414l5.707-5.707a1 1 0 0 1 1.414 0ZM24 12.34V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .471 19.208.029 12.854a12.027 12.027 0 0 1 3.48-9.333A12.043 12.043 0 0 1 12.836.029C19.097.454 24 5.862 24 12.341ZM18 9a3.002 3.002 0 0 0-5.121-2.121l-5.707 5.707A3.971 3.971 0 0 0 6 15.414V17a1 1 0 0 0 1 1h1.586a3.975 3.975 0 0 0 2.828-1.172l5.707-5.707c.566-.567.879-1.32.879-2.122Z"/></svg>
  