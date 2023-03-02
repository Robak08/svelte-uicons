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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 8.005V5.22C2 3.354 3.451 2 5.45 2l1.35.011c1.309 0 1.918-.431 2.69-.977.319-.226.639-.449.995-.646a3.092 3.092 0 0 1 2.997 0c.351.193.667.412.983.633.79.553 1.415.989 2.734.989l1.35-.011c1.999 0 3.45 1.354 3.45 3.22v2.785H2Zm0 2v2.393c0 5.5 4.887 9.198 7.801 10.913l.146.088c.491.295 1 .602 2.055.602 1.104 0 1.753-.292 2.429-.645C17.258 21.877 22 18.486 22 12.398v-2.393H2Z"/></svg>
  