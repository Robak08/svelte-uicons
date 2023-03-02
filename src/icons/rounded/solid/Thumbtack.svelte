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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.274 6.743 17.328.8a2.58 2.58 0 0 0-3.293-.349 2.5 2.5 0 0 0-.318 3.806l.592.591a.81.81 0 0 1 0 1.142l-2.1 2.1a1.506 1.506 0 0 1-1.431.393l-.82-.21a8.124 8.124 0 0 0-2.9-.219 3.368 3.368 0 0 0-2.837 2.256 3.509 3.509 0 0 0 .817 3.682L6.784 15.8.293 22.293a1 1 0 1 0 1.414 1.414l6.467-6.467 1.25 1.294A4.675 4.675 0 0 0 12.675 20a3.51 3.51 0 0 0 1.172-.2 3.143 3.143 0 0 0 2.106-2.7 8.093 8.093 0 0 0-.214-2.874l-.212-1.026a1.508 1.508 0 0 1 .4-1.414L18.016 9.7a.93.93 0 0 1 .593-.244.728.728 0 0 1 .52.217l.506.506a2.575 2.575 0 0 0 3.32.374 2.5 2.5 0 0 0 .319-3.806Z"/></svg>
  