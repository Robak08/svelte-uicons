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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.729 22.314a1 1 0 0 1-1.458 1.371l-5.483-5.839c-1.036.033-5.807.175-4.312-2.08a.985.985 0 0 1 .981-.254 8.055 8.055 0 0 0 3.458.29 1.259 1.259 0 0 1 1.09.4ZM15 14a4.99 4.99 0 0 0 3.536-1.462l5.171-5.172a1 1 0 1 0-1.414-1.416l-5.171 5.172a3 3 0 0 1-3.406.576l6.991-6.991a1 1 0 1 0-1.414-1.414L12.3 10.284a3 3 0 0 1 .576-3.406l5.174-5.171A1 1 0 0 0 16.636.293l-5.172 5.171a5.01 5.01 0 0 0-.635 6.293L.293 22.293a1 1 0 0 0 1.414 1.414l10.536-10.536A5 5 0 0 0 15 14Zm-9.548-1.035c.829.781 1.594-.256 2.151-.811a2 2 0 0 0 .539-1.8c-.617-1.722.891-3.732-.357-5.117L3.329.573A1.962 1.962 0 0 0 0 1.952C.237 6.566 1.935 8.92 5.452 12.965Z"/></svg>
  