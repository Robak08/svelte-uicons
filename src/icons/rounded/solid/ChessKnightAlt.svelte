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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 20h16a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2Zm1.975-10h4.247a5.681 5.681 0 0 1-3.181 3.416A5.076 5.076 0 0 0 4 18h16V8.5c0-.079-.1-7.963-8.536-8.5a1.983 1.983 0 0 0-2.053 1.385 5.29 5.29 0 0 1-3.5 3.846A3.018 3.018 0 0 0 4 8.025 1.977 1.977 0 0 0 5.975 10Z"/></svg>
  