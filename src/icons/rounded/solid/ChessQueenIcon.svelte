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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.009 7.881a10.363 10.363 0 0 1 6.15-3.7 2.5 2.5 0 1 1 3.682 0 10.363 10.363 0 0 1 6.15 3.7 10.048 10.048 0 0 0-3.054 3.719 5.995 5.995 0 0 0-9.875 0 10.036 10.036 0 0 0-3.053-3.719ZM21.032 22H2.968A1 1 0 0 0 3 24h18a1 1 0 0 0 .032-2Zm.553-2S24 11.252 24 10.5A1.449 1.449 0 0 0 22.5 9c-2 0-4.5 3.855-4.5 6a1 1 0 0 1-2 0 4 4 0 0 0-8 0 1 1 0 0 1-2 0c0-2.145-2.5-6-4.5-6A1.449 1.449 0 0 0 0 10.5c0 .752 2.415 9.5 2.415 9.5Z"/></svg>
  