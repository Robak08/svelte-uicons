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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1.333 7.238C.484 5.522-1.2 1.269 1.2.15a1.949 1.949 0 0 1 2.129.423l4.96 5.3A1 1 0 1 1 6.887 7.3L2 2.08c.119 3.777 2.343 6.6 4.841 9.439a1 1 0 0 1-1.39 1.446 24.522 24.522 0 0 1-4.118-5.727ZM18.005 16.2a1.259 1.259 0 0 0-1.09-.4 8.055 8.055 0 0 1-3.458-.29.985.985 0 0 0-.981.254c-1.494 2.256 3.274 2.113 4.312 2.08l5.483 5.839a1 1 0 0 0 1.458-1.371ZM15 14a4.99 4.99 0 0 0 3.536-1.462l5.171-5.172a1 1 0 1 0-1.414-1.416l-5.171 5.172a3 3 0 0 1-3.406.576l6.991-6.991a1 1 0 1 0-1.414-1.414L12.3 10.284a3 3 0 0 1 .576-3.406l5.174-5.171A1 1 0 0 0 16.636.293l-5.172 5.171a5.01 5.01 0 0 0-.635 6.293L.293 22.293a1 1 0 0 0 1.414 1.414l10.536-10.536A5 5 0 0 0 15 14Z"/></svg>
  