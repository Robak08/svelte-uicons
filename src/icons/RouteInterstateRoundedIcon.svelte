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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-route-interstate {customClass}"><path d="m18.55 2-1.35.011c-1.309 0-1.918-.431-2.69-.977a10.556 10.556 0 0 0-.995-.646A3.106 3.106 0 0 0 12 .003a3.117 3.117 0 0 0-1.515.385c-.356.196-.676.42-.995.646-.772.546-1.382.977-2.69.977L5.45 2C3.451 2 2 3.354 2 5.22v7.178c0 5.5 5.033 9.286 7.947 11.001.491.295 1 .601 2.053.601s1.562-.306 2.053-.601C16.967 21.684 22 17.899 22 12.398V5.22C22 3.354 20.549 2 18.55 2ZM20 12.397c0 4.506-4.434 7.789-6.979 9.287-.38.229-.523.315-1.021.315-.498 0-.641-.086-1.021-.315C8.434 20.186 4 16.903 4 12.397v-2.393h16v2.393Zm0-4.393H4V5.219c0-1.132 1.11-1.22 1.45-1.22l1.35.011c1.944 0 2.998-.745 3.845-1.344.259-.183.517-.368.806-.527.174-.096.362-.141.55-.138.188-.003.376.042.55.138.289.159.547.344.806.527.847.599 1.9 1.344 3.845 1.344l1.35-.011c.34 0 1.45.088 1.45 1.22v2.785Z"/></svg>
  