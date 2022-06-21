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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-alarm-clock {customClass}"><path d="M13 2.051V1a1 1 0 0 0-2 0v1.051a10.98 10.98 0 0 0-7.319 18.125A3.024 3.024 0 0 0 2 23a1 1 0 0 0 2 0 1.2 1.2 0 0 1 1.11-1.229.932.932 0 0 0 .2-.062 10.924 10.924 0 0 0 13.39 0 1.033 1.033 0 0 0 .182.064A1.2 1.2 0 0 1 20 23a1 1 0 0 0 2 0 3.024 3.024 0 0 0-1.681-2.824A10.98 10.98 0 0 0 13 2.051ZM3 13a9 9 0 1 1 9 9 9.011 9.011 0 0 1-9-9ZM19.215 0a1 1 0 0 0 0 2A2.59 2.59 0 0 1 22 4.5a1 1 0 0 0 2 0A4.6 4.6 0 0 0 19.215 0ZM2 4.5A2.59 2.59 0 0 1 4.785 2a1 1 0 0 0 0-2A4.6 4.6 0 0 0 0 4.5a1 1 0 0 0 2 0Z"/><path d="M13 11.586V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414Z"/></svg>
