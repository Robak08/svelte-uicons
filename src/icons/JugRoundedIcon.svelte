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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-jug {customClass}"><path d="M18.89 10.06A3.504 3.504 0 0 0 16.5 4c-.53 0-1.04.12-1.5.34V2c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1v4.93c0 .33-.17.65-.45.83L5.22 9.98a5.011 5.011 0 0 0-2.23 4.16V19c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5v-4.86c0-1.63-.79-3.15-2.11-4.08ZM16.5 6c.83 0 1.5.67 1.5 1.5 0 .6-.36 1.14-.89 1.37l-1.66-1.11a.967.967 0 0 1-.41-.58A1.5 1.5 0 0 1 16.51 6ZM19 19c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3v-4h11c.55 0 1-.45 1-1s-.45-1-1-1H5.22c.22-.54.61-1.02 1.11-1.36l3.33-2.22C10.5 8.86 11 7.93 11 6.92V2h2v4.93c0 1 .5 1.94 1.34 2.5l3.33 2.22c.84.56 1.34 1.49 1.34 2.5v4.86Z"/></svg>
  